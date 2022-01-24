# Chainlink External Adapter for Fmp Cloud

Version: 1.2.4

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     | Description |  Type  | Options |        Default        |
| :-------: | :----------: | :---------: | :----: | :-----: | :-------------------: |
|    ✅     |   API_KEY    |             | string |         |                       |
|           | API_ENDPOINT |             | string |         | `https://fmpcloud.io` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |         Options          | Default |
| :-------: | :------: | :-----------------: | :----: | :----------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [stock](#stock-endpoint) | `stock` |

---

## Stock Endpoint

Supported names for this endpoint are: `quote`, `price`, `stock`.

### Input Params

| Required? | Name |     Aliases     |             Description             |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :-------------: | :---------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `asset`, `from` | The symbol of the currency to query | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "quote",
    "base": "AUD"
  },
  "rateLimitMaxAge": 384615
}
```

Response:

```json
{
  "result": 0.71222
}
```

---
