import { AssetIndex } from './adapter'
import { Requester } from '@chainlink/external-adapter'
import Decimal from 'decimal.js'

const getPriceData = async (symbols: string) => {
  const url = 'https://min-api.cryptocompare.com/data/pricemulti'
  const params = {
    tsyms: 'USD',
    fsyms: symbols,
  }
  const config = {
    url,
    params,
  }
  const response = await Requester.request(config)
  return response.data
}

export const calculateIndex = (index: AssetIndex[]): number => {
  let value = new Decimal(0)

  for (const i of index) {
    const price = i.priceData && i.priceData['USD']
    if (!price || price <= 0) {
      throw Error('Invalid price')
    }
    value = value.plus(new Decimal(i.units).times(new Decimal(price)))
  }

  return value.toNumber()
}

export const priceAdapter = async (index: AssetIndex[]): Promise<AssetIndex[]> => {
  const symbols: string[] = []
  index.forEach(({ asset }) => {
    symbols.push(asset.toUpperCase())
  })
  const prices = await getPriceData(symbols.join())

  const pricesMap = new Map()
  for (const symbol in prices) {
    pricesMap.set(symbol.toUpperCase(), prices[symbol])
  }

  for (const i of index) {
    i.priceData = pricesMap.get(i.asset.toUpperCase())
  }

  return index
}
