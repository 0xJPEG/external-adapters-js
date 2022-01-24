# Chainlink External Adapter for CryptoMKT

Version: 1.2.4

##### NOTE: the `ticker` endpoint is temporarily still supported, however, is being deprecated. Please use the `crypto` endpoint instead.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

There are no environment variables for this adapter.

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |          Options           | Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint) | `crypto` |

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `ticker`.

### Input Params

| Required? | Name  |        Aliases         |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :--------------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin`, `fsym` |   The symbol of the currency to query    | string |         |         |            |                |
|    ✅     | quote | `to`, `market`, `tsym` | The symbol of the currency to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "BTC",
    "quote": "ARS",
    "resultPath": "last"
  },
  "rateLimitMaxAge": 6666
}
```

Response:

```json
{
  "result": 12396935
}
```

---
