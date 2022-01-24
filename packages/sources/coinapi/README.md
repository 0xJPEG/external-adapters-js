# Chainlink CoinApi External Adapter

Version: 1.1.5

##### NOTE: the `price` endpoint is temporarily still supported, however, is being deprecated. Please use the `crypto` endpoint instead.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |  Name   |                                 Description                                 |  Type  | Options | Default |
| :-------: | :-----: | :-------------------------------------------------------------------------: | :----: | :-----: | :-----: |
|    ✅     | API_KEY | An API key that can be obtained from [here](https://www.coinapi.io/pricing) | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                        Options                         | Default  |
| :-------: | :------: | :-----------------: | :----: | :----------------------------------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint), [assets](#assets-endpoint) | `crypto` |

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `price`.

### Input Params

| Required? | Name  |    Aliases     |                          Description                           |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :------------------------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin` | The symbol of the currency to query [crypto](#Crypto-Endpoint) | string |         |         |            |                |
|    ✅     | quote | `to`, `market` |            The symbol of the currency to convert to            | string |         |         |            |                |

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
  "result": 0.06262119731705901
}
```

---

## Assets Endpoint

`assets` is the only supported name for this endpoint.

### Input Params

| Required? | Name |    Aliases     |               Description                | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :------------: | :--------------------------------------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin` | The symbol of the currency to convert to |      |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "assets",
    "base": "ETH",
    "resultPath": "price_usd"
  }
}
```

Response:

```json
{
  "result": 3043.673871176232
}
```

---
