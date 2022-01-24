# Chainlink External Adapter for Amberdata

Version: 1.3.0

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |  Name   | Description |  Type  | Options | Default |
| :-------: | :-----: | :---------: | :----: | :-----: | :-----: |
|    ✅     | API_KEY |             | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                                                    Options                                                                     | Default |
| :-------: | :------: | :-----------------: | :----: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [balance](#balance-endpoint), [crypto](#crypto-endpoint), [token](#token-endpoint), [gasprice](#gasprice-endpoint), [volume](#volume-endpoint) |         |

---

## Balance Endpoint

`balance` is the only supported name for this endpoint.

### Input Params

| Required? |     Name      | Aliases |                        Description                         |  Type  | Options | Default  | Depends On | Not Valid With |
| :-------: | :-----------: | :-----: | :--------------------------------------------------------: | :----: | :-----: | :------: | :--------: | :------------: |
|    ✅     |   addresses   |         | Array of objects with address information as defined below | array  |         |          |            |                |
|           | confirmations |         |                  Confirmations parameter                   | number |         |   `6`    |            |                |
|           |   dataPath    |         |           Path where to find the addresses array           | string |         | `result` |            |                |

Address objects within `addresses` have the following properties:

| Required? |  Name   |                 Description                  |  Type  |                  Options                  |  Default  |
| :-------: | :-----: | :------------------------------------------: | :----: | :---------------------------------------: | :-------: |
|    ✅     | address |               Address to query               | string |                                           |           |
|           |  chain  | Chain to query (Ethereum testnet is Rinkeby) | string |           `mainnet`, `testnet`            | `mainnet` |
|           |  coin   |              Currency to query               | string | `bch`, `btc`, `btsv`, `eth`, `ltc`, `zec` |   `btc`   |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "balance",
    "dataPath": "addresses",
    "addresses": [
      {
        "address": "3EyjZ6CtEZEKyc719NZMyWaJpJG5jsVJL1"
      },
      {
        "address": "38bzm6nhQMFJe71jJw1U7CbgNrVNpkonZF"
      }
    ]
  }
}
```

Response:

```json
{
  "result": [
    {
      "address": "3EyjZ6CtEZEKyc719NZMyWaJpJG5jsVJL1",
      "chain": "mainnet",
      "coin": "btc",
      "balance": "0"
    },
    {
      "address": "38bzm6nhQMFJe71jJw1U7CbgNrVNpkonZF",
      "chain": "mainnet",
      "coin": "btc",
      "balance": "2188"
    }
  ]
}
```

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `price`.

### Input Params

| Required? | Name  |    Aliases     |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin` |   The symbol of the currency to query    | string |         |         |            |                |
|    ✅     | quote | `to`, `market` | The symbol of the currency to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "ETH",
    "quote": "BTC"
  }
}
```

Response:

```json
{
  "result": 0.06567038
}
```

---

## Token Endpoint

Supported names for this endpoint are: `marketcap`, `token`.

### Input Params

| Required? | Name |    Aliases     |             Description             |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :------------: | :---------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin` | The symbol of the currency to query | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "marketcap",
    "base": "ETH"
  }
}
```

Response:

```json
{
  "result": 490182085144.57404
}
```

---

## Gasprice Endpoint

`gasprice` is the only supported name for this endpoint.

### Input Params

| Required? |    Name    | Aliases |               Description                |  Type  |                 Options                 |      Default       | Depends On | Not Valid With |
| :-------: | :--------: | :-----: | :--------------------------------------: | :----: | :-------------------------------------: | :----------------: | :--------: | :------------: |
|           |   speed    |         |            The desired speed             | string | `safeLow`, `average`, `fast`, `fastest` |     `average`      |            |                |
|           | blockchain |         | The blockchain id to get gas prices from | string |                                         | `ethereum-mainnet` |            |                |

### Example

There are no examples for this endpoint.

---

## Volume Endpoint

`volume` is the only supported name for this endpoint.

### Input Params

| Required? | Name  |    Aliases     |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin` |   The symbol of the currency to query    | string |         |         |            |                |
|    ✅     | quote | `to`, `market` | The symbol of the currency to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "volume",
    "base": "LINK",
    "quote": "USD"
  }
}
```

Response:

```json
{
  "result": 13804511.82541564
}
```

---
