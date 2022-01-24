# Chainlink CurrencyLayer External Adapter

Version: 1.3.2

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |  Name   |                                  Description                                   |  Type  | Options | Default |
| :-------: | :-----: | :----------------------------------------------------------------------------: | :----: | :-----: | :-----: |
|    ✅     | API_KEY | An API key that can be obtained from [here](https://currencylayer.com/product) | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                       Options                        |  Default  |
| :-------: | :------: | :-----------------: | :----: | :--------------------------------------------------: | :-------: |
|           | endpoint | The endpoint to use | string | [convert](#convert-endpoint), [live](#live-endpoint) | `convert` |

---

## Convert Endpoint

`convert` is the only supported name for this endpoint.

### Input Params

| Required? |  Name  |    Aliases     |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |  base  | `from`, `coin` |   The symbol of the currency to query    | string |         |         |            |                |
|    ✅     | quote  | `to`, `market` | The symbol of the currency to convert to | string |         |         |            |                |
|           | amount |                |        An amount of the currency         | number |         |   `1`   |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "convert",
    "base": "BTC",
    "quote": "USD",
    "amount": 1
  }
}
```

Response:

```json
{
  "result": 60535.74
}
```

---

## Live Endpoint

Supported names for this endpoint are: `live`, `forex`, `price`.

### Input Params

| Required? |  Name  |         Aliases         | Description | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :---------------------: | :---------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |  base  | `base`, `from`, `coin`  |             |      |         |         |            |                |
|    ✅     | quote  | `quote`, `to`, `market` |             |      |         |         |            |                |
|           | amount |                         |             |      |         |         |            |                |

### Example

There are no examples for this endpoint.

---
