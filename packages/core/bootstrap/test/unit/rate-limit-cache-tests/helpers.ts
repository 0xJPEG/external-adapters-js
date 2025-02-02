import { AdapterContext, AdapterRequest, Execute } from '@chainlink/types'
import { createStore, combineReducers, Store } from 'redux'
import { useFakeTimers } from 'sinon'
import { withMiddleware } from '../../../src/index'
import { withDebug } from '../../../src/lib/middleware/debugger'
import { defaultOptions, withCache } from '../../../src/lib/middleware/cache'
import * as cacheWarmer from '../../../src/lib/middleware/cache-warmer'
import * as rateLimit from '../../../src/lib/middleware/rate-limit'
import { get } from '../../../src/lib/middleware/rate-limit/config'

export const newStore = () => {
  const initState = { cacheWarmer: {}, rateLimit: {} }
  const rootReducer = combineReducers({
    cacheWarmer: cacheWarmer.reducer.rootReducer,
    rateLimit: rateLimit.reducer.rootReducer,
  })
  const store = createStore(rootReducer, initState)
  return store
}

export const makeExecuteWithWarmer = async (execute: Execute, store: Store) => {
  const options = defaultOptions()
  const context: AdapterContext = {
    cache: {
      ...defaultOptions(),
      instance: await options.cacheBuilder(options.cacheImplOptions),
    },
    rateLimit: get(),
  }
  const executeWithMiddleware = await withMiddleware(execute, context, [
    withCache(),
    rateLimit.withRateLimit({
      getState: () => store.getState().rateLimit,
      dispatch: (a) => store.dispatch(a),
    } as Store),
    withDebug,
  ])
  return async (data: AdapterRequest) => {
    const result = await executeWithMiddleware(data, context)
    store.dispatch(
      cacheWarmer.actions.warmupSubscribed({
        id: data.id,
        executeFn: executeWithMiddleware,
        data,
      } as cacheWarmer.actions.WarmupSubscribedPayload),
    )
    return result
  }
}

export const dataProviderMock = (cost = 1): { execute: Execute } => {
  return {
    execute: async (request): Promise<any> => {
      return {
        jobRunID: request.id,
        data: {
          result: '',
          cost,
          rateLimitMaxAge: request.data?.rateLimitMaxAge,
        },
        result: '',
        statusCode: 200,
      }
    },
  }
}

export const getRLTokenSpentPerMinute = (hearbeats: rateLimit.reducer.Heartbeats) => {
  const allResponses = Object.keys(hearbeats.participants).flatMap(
    (id) => hearbeats.participants[id][rateLimit.reducer.IntervalNames.HOUR],
  )
  const responses = allResponses
    .filter((r) => !r.h)
    .map((r) => ({
      ...r,
      minute: new Date(r.t).getMinutes(),
    }))
  const rlPerMin: { [key: number]: number } = {}
  responses.forEach((r) => {
    if (rlPerMin[r.minute]) {
      rlPerMin[r.minute] += 1 * r.c
    } else {
      rlPerMin[r.minute] = 1 * r.c
    }
  })
  return rlPerMin
}

export function setupClock() {
  const clock = useFakeTimers()
  return [
    clock,
    () => {
      clock.restore()
    },
  ] as const
}
