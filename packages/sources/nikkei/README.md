# Chainlink External Adapter for Nikkei

Version: 1.1.14

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     | Description |  Type  | Options |                 Default                  |
| :-------: | :----------: | :---------: | :----: | :-----: | :--------------------------------------: |
|           | API_ENDPOINT |             | string |         | `https://indexes.nikkei.co.jp/en/nkave/` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |         Options          | Default |
| :-------: | :------: | :-----------------: | :----: | :----------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [stock](#stock-endpoint) | `stock` |

---

## Stock Endpoint

Supported names for this endpoint are: `stock`, `price`.

### Input Params

| Required? | Name |    Aliases     |                                     Description                                      | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :------------: | :----------------------------------------------------------------------------------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin` | The symbol of the index to query [list](https://indexes.nikkei.co.jp/en/nkave/index) |      |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "stock",
    "base": "N225"
  }
}
```

Response:

```json
{
  "result": 28860.62
}
```

---
