import { expose } from '@chainlink/ea-bootstrap'
import { endpointSelector, makeExecute } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig, NAME } from './config'

const { server } = expose(NAME, makeExecute(), undefined, endpointSelector)

export { NAME, endpoints, makeExecute, makeConfig, server }
