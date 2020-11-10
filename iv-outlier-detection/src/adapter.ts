import { Execute } from '@chainlink/types'
import { Requester, Validator } from '@chainlink/external-adapter'
import { fetchGenesisVolatility } from './genesisVolatility'
import { fetchDerbit } from './derbit'
import { getLatestAnswer } from './onchain'

export type ExternalFetch = (symbol: string, days: number) => Promise<number>

const difference = (a: number, b: number): number => {
  return (Math.abs(a - b) / ((a + b) / 2)) * 100
}

const customParams = {
  symbol: ['base', 'from', 'coin', 'symbol'],
  days: ['days', 'period'],
  contract: ['referenceContract', 'contract'],
  multiply: true,
}

export const execute: Execute = async (input) => {
  const validator = new Validator(input, customParams)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const symbol = validator.validated.data.symbol.toUpperCase()
  const days = validator.validated.data.days
  const contract = validator.validated.data.contract
  const multiply = validator.validated.data.multiply

  const result = await fetchGenesisVolatility(symbol, days)
  const onChainValue = await getLatestAnswer(contract, multiply, input.meta)
  if (onChainValue !== 0 && difference(result, onChainValue) > 50) {
    throw new Error('value difference between Genesis Volatility and on-chain is more than 50%')
  }

  const derbit = await fetchDerbit(symbol, days)
  if (difference(result, derbit) > 30) {
    throw new Error('value difference between Genesis Volatility and Derbit is more than 30%')
  }

  const response = { data: { result }, result, status: 200 }
  return Requester.success(jobRunID, response)
}
