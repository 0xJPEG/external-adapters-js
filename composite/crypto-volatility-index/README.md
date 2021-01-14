# Chainlink composite adapter for the Crypto Volatility Index (CVX)

## Overview

CVX is a decentralized volatility index created by COTI (https://coti.io) for the crypto markets

The CVX index calculation is based on the classic approach of the Black-Scholes option pricing model and is adapted to the current crypto-market conditions.

## Configuration

The CVX index calculation requires the following environment variables:

- `RPC_URL`: Blockchain RPC endpoint to get the needed on-chain data
- `DOMINANCE_PROVIDER`: Data provider to use. Some of them require an `API_KEY`(K). Options available:
    - `coingecko`
    - `coinmarketcap`(K)
- `API_KEY`: For those data providers who need an api key

## Input Params

- `contractAddress` or `contract`: The address of the on-chain crypto volatility index aggregator contract
- `heartBeat` (Optional): The time length of the aggregator heart beat in minutes (Default: 180)

## Build and run

To build:
```bash
make docker adapter=crypto-volatility-index
```

To run:
```bash
docker run -p 8080:8080 -e RPC_URL=<rpc url, for example https://mainnet.infura.io/v3/infura_key> -e DOMINANCE_PROVIDER=coingecko -e LOG_LEVEL=debug crypto-volatility-index-adapter:latest
```


## Output

```json
{
 "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
 "data": {
  "result": 67.4
 },
 "statusCode": 200
}
```
