# Chainlink External Adapter for dxFeed

Version: 1.2.5

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     |         Description          |  Type  | Options |                  Default                   |
| :-------: | :----------: | :--------------------------: | :----: | :-----: | :----------------------------------------: |
|    ✅     | API_USERNAME |                              | string |         |                                            |
|    ✅     | API_PASSWORD |                              | string |         |                                            |
|           | API_ENDPOINT | The endpoint for your dxFeed | string |         | `https://tools.dxfeed.com/webservice/rest` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |         Options          | Default |
| :-------: | :------: | :-----------------: | :----: | :----------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [price](#price-endpoint) | `price` |

---

## Price Endpoint

Supported names for this endpoint are: `price`, `crypto`, `stock`, `forex`, `commodities`.

### Input Params

| Required? | Name |         Aliases          |             Description             | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :----------------------: | :---------------------------------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin`, `market` | The symbol of the currency to query |      |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "price",
    "base": "TSLA"
  }
}
```

Response:

```json
{
  "result": 239.255
}
```

---
