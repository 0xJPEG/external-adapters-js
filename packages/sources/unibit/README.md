# Chainlink External Adapter for Unibit

Version: 1.2.4

This historical endpoint provides the closing price of the previous day as detailed in [Unibit documentation](https://unibit.ai/api/docs/V2.0/historical_stock_price). NOTE: each request sent to this endpoint has a cost of 10 credits

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     |         Description          |  Type  | Options |              Default              |
| :-------: | :----------: | :--------------------------: | :----: | :-----: | :-------------------------------: |
|    ✅     |   API_KEY    |      API key for Unibit      | string |         |                                   |
|           | API_ENDPOINT | The endpoint for your Unibit |        |         | `https://api.unibit.ai/v2/stock/` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |              Options               |   Default    |
| :-------: | :------: | :-----------------: | :----: | :--------------------------------: | :----------: |
|           | endpoint | The endpoint to use | string | [historical](#historical-endpoint) | `historical` |

---

## Historical Endpoint

Supported names for this endpoint are: `historical`, `eod`.

### Input Params

| Required? | Name |              Aliases               |             Description             |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :--------------------------------: | :---------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin`, `market`, `symbol` | The symbol of the currency to query | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "base": "VXX"
  },
  "rateLimitMaxAge": 57603
}
```

Response:

```json
{
  "result": 26.16
}
```

---
