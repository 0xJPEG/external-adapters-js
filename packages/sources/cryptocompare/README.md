# Chainlink External Adapter for CryptoCompare

Version: 1.2.5

##### NOTE: the `price` endpoint is temporarily still supported, however, is being deprecated. Please use the `crypto` endpoint instead.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |  Name   |                                      Description                                       |  Type  | Options | Default |
| :-------: | :-----: | :------------------------------------------------------------------------------------: | :----: | :-----: | :-----: |
|    ✅     | API_KEY | An API key that can be obtained from [here](https://min-api.cryptocompare.com/pricing) | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |          Options           | Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint) | `crypto` |

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `price`, `marketcap`, `volume`.

### Input Params

| Required? |   Name   |        Aliases         |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :------: | :--------------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |   base   | `from`, `coin`, `fsym` |   The symbol of the currency to query    |        |         |         |            |                |
|    ✅     |  quote   | `to`, `market`, `tsym` | The symbol of the currency to convert to |        |         |         |            |                |
|           | endpoint |                        |                                          | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "ETH",
    "quote": "BTC",
    "resultPath": "PRICE"
  }
}
```

Response:

```json
{
  "result": 0.06543
}
```

<details>
<summary>Additional Examples</summary>

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "marketcap",
    "base": "ETH",
    "quote": "BTC",
    "resultPath": "MKTCAP"
  }
}
```

Response:

```json
{
  "result": 7694679.153236445
}
```

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "volume",
    "base": "ETH",
    "quote": "BTC",
    "resultPath": "VOLUME24HOURTO"
  }
}
```

Response:

```json
{
  "result": 12999.111610148046
}
```

</details>

---
