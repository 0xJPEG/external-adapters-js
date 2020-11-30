import fs from 'fs'
import { join } from 'path'
import { ethers, utils } from 'ethers'
import { logger } from '@chainlink/external-adapter'

type Directory = Record<string, string>

const getDirectory = (network: string): Directory => {
  const absolutePath = join(process.cwd(), `./src/symbols/directory.${network}.json`)
  const buffer = fs.readFileSync(absolutePath, 'utf8')
  return JSON.parse(buffer.toString())
}

const ERC20ABI = ['function symbol() view returns (string)']
const ERC20ABI_bytes32 = [
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

const getERC20Symbol = async (rpcUrl: string, address: string): Promise<string> => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
  const _symbol = (abi: any) => new ethers.Contract(address, abi, provider).symbol()
  logger.info('Calling blockchain to get ERC20 token symbol...')
  try {
    return await _symbol(ERC20ABI)
  } catch (ignoreable) {
    // TODO: is this error really ignoreable in all cases?
    return utils.parseBytes32String(await _symbol(ERC20ABI_bytes32))
  }
}

let cachedDirectory: Directory

export const getSymbol = async (
  address: string,
  network: string,
  rpcUrl: string,
): Promise<string> => {
  if (!cachedDirectory) {
    cachedDirectory = getDirectory(network)
  }
  return cachedDirectory[address] || (await getERC20Symbol(rpcUrl, address))
}
