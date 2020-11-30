import { ethers } from 'ethers'

type Allocations = {
  components: string[]
  units: number[]
}

/*
  NOTICE!

  The current implementation is fetching data directly from SetToken contracts (https://etherscan.io/address/0x78733fa5e70e3ab61dc49d93921b289e4b667093#code)
  Note that this implementation won't work in other networks unless we deploy a copy of the contract.

  The correct implementation should use SetProtocol.js typed library instead to fetch data directly from the SetToken contract directly. 
  The ChainlinkAdapter.getAllocations(ISetToken _setToken) should be reimplemented in JS in order to use it.
*/

const ABI = [
  {
    inputs: [{ internalType: 'contract ISetToken', name: '_setToken', type: 'address' }],
    name: 'getAllocations',
    outputs: [
      { internalType: 'address[]', name: '', type: 'address[]' },
      { internalType: 'int256[]', name: '', type: 'int256[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export const getAllocations = async (
  contractAddress: string,
  setAddress: string,
  rpcUrl: string,
): Promise<Allocations> => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
  const index = new ethers.Contract(contractAddress, ABI, provider)
  const info = await index.getAllocations(setAddress)

  return {
    components: info[0],
    units: info[1],
  }
}
