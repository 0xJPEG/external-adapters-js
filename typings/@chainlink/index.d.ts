// Declare missing type definitions
declare module '@chainlink/types' {
  export type AdapterRequest = {
    id: string
    data: Record<string, unknown>
    meta?: Record<string, unknown>
  }

  export type AdapterHealthCheck = (callback: any) => any

  export type AdapterResponse = {
    jobRunID: string
    statusCode: number
    data: any
    result: any
  }

  type ErrorBasic = {
    name: string
    message: string
  }
  type ErrorFull = ErrorBasic & {
    stack: string
    cause: string
  }
  export type AdapterErrorResponse = {
    jobRunID: string
    status: string
    statusCode: number
    error: ErrorBasic | ErrorFull
  }

  // TODO: clean this ASAP
  export type WrappedAdapterResponse = {
    statusCode: number
    data: AdapterResponse
  }
  export type ExecuteWrappedResponse = (input: AdapterRequest) => Promise<WrappedAdapterResponse>

  export type ExecuteSync = (input: AdapterRequest, callback: (statusCode, data) => void) => void

  import { AxiosRequestConfig } from 'axios'
  export type Config = {
    apiKey?: string
    network?: string
    returnRejectedPromiseOnError?: Boolean
    api: Partial<AxiosRequestConfig>
  }

  export type Execute = (input: AdapterRequest) => Promise<AdapterResponse>

  export type ExecuteWithConfig = (
    input: AdapterRequest,
    config: Config,
  ) => Promise<AdapterResponse>

  export type ExecuteFactory = (config?: Config) => Execute

  export type Address = {
    address: string
    coin?: string
    chain?: string
  }
  export type Account = Address & {
    balance?: number
  }
}
declare module '@chainlink/ea-bootstrap'
declare module '@chainlink/external-adapter'
declare module 'object-path'
