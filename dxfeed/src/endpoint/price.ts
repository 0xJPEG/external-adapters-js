import { Requester, Validator } from '@chainlink/external-adapter'
import { ExecuteWithConfig, Config } from '@chainlink/types'

const DEFAULT_DATA_ENDPOINT = 'events.json'

export const NAME = 'price'

const customError = (data: any) => data.Response === 'Error'

const customParams = {
  base: ['base', 'from', 'coin', 'market'],
}

const commonSymbols: { [key: string]: string } = {
  N225: 'NKY.IND:TEI',
  FTSE: 'UKX.IND:TEI',
  TSLA: 'TSLA:BFX',
  WTI: 'USO/USD:AFX',
}

export const execute: ExecuteWithConfig<Config> = async (request, config) => {
  const validator = new Validator(request, customParams)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const url = validator.validated.data.endpoint || DEFAULT_DATA_ENDPOINT
  let symbols = validator.validated.data.base.toUpperCase()
  if (symbols in commonSymbols) {
    symbols = commonSymbols[symbols]
  }

  const params = {
    events: 'Trade',
    symbols,
  }

  const options = {
    ...config.api,
    url,
    params,
  }

  const response = await Requester.request(options, customError)
  const result = Requester.validateResultNumber(response.data, ['Trade', symbols, 'price'])

  return Requester.success(jobRunID, {
    data: config.verbose ? { ...response.data, result } : { result },
    result,
    status: 200,
  })
}
