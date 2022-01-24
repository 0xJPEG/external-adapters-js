# Chainlink EOD Historical Data External Adapter

Version: 1.2.4

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     | Description |  Type  | Options |             Default             |
| :-------: | :----------: | :---------: | :----: | :-----: | :-----------------------------: |
|    ✅     |   API_KEY    |             | string |         |                                 |
|           | API_ENDPOINT |             | string |         | `https://eodhistoricaldata.com` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |         Options          | Default |
| :-------: | :------: | :-----------------: | :----: | :----------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [stock](#stock-endpoint) | `stock` |

---

## Stock Endpoint

Supported names for this endpoint are: `price`, `stock`.

### Input Params

| Required? | Name |          Aliases          |                                                       Description                                                        |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :-----------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `asset`, `from`, `symbol` | The symbol of the currency to query taken from [here](https://eodhistoricaldata.com/financial-apis/category/data-feeds/) | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "base": "FTSE"
  },
  "rateLimitMaxAge": 960
}
```

Response:

```json
{
  "result": 7310.3701
}
```

---
