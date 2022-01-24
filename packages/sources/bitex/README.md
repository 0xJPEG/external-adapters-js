# Chainlink External Adapter for Bitex

Version: 1.3.4

##### NOTE: the `price` endpoint is temporarily still supported, however, is being deprecated. Please use the `crypto` endpoint instead.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |  Name   |     Description      |  Type  | Options | Default |
| :-------: | :-----: | :------------------: | :----: | :-----: | :-----: |
|    ✅     | API_KEY | Bitex API key to use | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |          Options           | Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint) | `crypto` |

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `tickers`.

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
    "quote": "ARS"
  },
  "rateLimitMaxAge": 222
}
```

Response:

```json
{
  "result": 934877.7183770883
}
```

---
