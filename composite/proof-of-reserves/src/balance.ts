import { Execute, Implementations } from '@chainlink/types'
import amberdata from '@chainlink/amberdata-adapter'
import blockchainCom from '@chainlink/blockchain.com-adapter'
import blockchair from '@chainlink/blockchair-adapter'
import blockcypher from '@chainlink/blockcypher-adapter'
import btc_com from '@chainlink/btc.com-adapter'
import cryptoapis from '@chainlink/cryptoapis-adapter'
import sochain from '@chainlink/sochain-adapter'

export type BitcoinIndexerOptions = { type?: BitcoinIndexer }
export enum BitcoinIndexer {
  Amberdata = 'amberdata',
  BlockchainCom = 'blockchain_com',
  Blockcypher = 'blockcypher',
  Blockchair = 'blockchair',
  BtcCom = 'btc_com',
  Cryptoapis = 'cryptoapis',
  SoChain = 'sochain',
}
const implLookup: Implementations<BitcoinIndexer> = {
  [amberdata.NAME]: amberdata,
  [blockchainCom.NAME]: blockchainCom,
  [blockcypher.NAME]: blockcypher,
  [blockchair.NAME]: blockchair,
  [btc_com.NAME]: btc_com,
  [cryptoapis.NAME]: cryptoapis,
  [sochain.NAME]: sochain,
}

const isBitcoinIndexer = (envVar?: string): envVar is BitcoinIndexer =>
  Object.values(BitcoinIndexer).includes(envVar as any)

export const getBitcoinIndexer = (): BitcoinIndexer | undefined => {
  const bitcoinIndexer = process.env.BTC_INDEXER_ADAPTER
  return isBitcoinIndexer(bitcoinIndexer) ? (bitcoinIndexer as BitcoinIndexer) : undefined
}

export const getImpl = (options: BitcoinIndexerOptions): Execute => {
  const prefix = options.type?.toUpperCase()
  const impl = options.type && implLookup[options.type?.toUpperCase()]
  if (!impl) throw Error(`Unknown balance adapter type: ${options.type}`)

  return (data) => {
    const config = impl.makeConfig(prefix)
    const execute = impl.makeExecute(config)
    return execute(data)
  }
}
