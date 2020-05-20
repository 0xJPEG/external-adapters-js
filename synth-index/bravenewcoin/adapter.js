const { Requester } = require('@chainlink/external-adapter')
const Decimal = require('decimal.js')

const host = 'bravenewcoin-v1.p.rapidapi.com'
const url = `https://${host}/convert`

const getPriceData = async (synth) => {
  const headers = {
    'x-rapidapi-host': host,
    'x-rapidapi-key': process.env.API_KEY
  }
  const params = {
    qty: 1,
    to: 'USD',
    from: synth.symbol
  }
  const config = {
    url,
    params,
    headers
  }
  return await Requester.request(config)
}

const calculateIndex = (indexes) => {
  let value = new Decimal(0)
  try {
    indexes.forEach(i => {
      const price = i.priceData.to_quantity
      if (price <= 0) {
        throw Error('invalid price')
      }
      value = value.plus(new Decimal(i.units).times(new Decimal(price)))
    })
  } catch (error) {
    throw error.message
  }
  return value.toNumber()
}

const createRequest = async (jobRunID, data) => {
  await Promise.all(data.index.map(async (synth) => {
    synth.priceData = await getPriceData(synth)
  }))
  return data
}

module.exports.createRequest = createRequest
module.exports.calculateIndex = calculateIndex
