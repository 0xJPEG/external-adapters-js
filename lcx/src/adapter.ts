import { Execute } from '@chainlink/types'
import { Requester, Validator } from '@chainlink/external-adapter'

const customError = (data: any) => {
  return data.Response === 'Request failed with status code 400'
}

const customParams = {
  base: ['base', 'from', 'coin'],
  quote: ['quote', 'to', 'market'],
  endpoint: false,
}

export const execute: Execute = async (input) => {
  const validator = new Validator(input, customParams)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const base = validator.validated.data.base.toUpperCase()
  const quote = validator.validated.data.quote.toUpperCase()
  const url = `https://rp.lcx.com/v1/rates/current/?coin=${base}&currency=${quote}`

  const config = {
    url,
    headers: {
      'api-key': process.env.API_KEY,
    },
  }

  const response = await Requester.request(config, customError)
  response.data.result = Requester.validateResultNumber(response.data, ['data', 'Price'])
  return Requester.success(jobRunID, response)
}
