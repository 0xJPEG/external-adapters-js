# Chainlink Fixer External Adapter

Version: 1.3.2

This adapter is for [Fixer.io](https://fixer.io/) and supports the convert endpoint.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     | Description |  Type  | Options |         Default         |
| :-------: | :----------: | :---------: | :----: | :-----: | :---------------------: |
|    ✅     |   API_KEY    |             | string |         |                         |
|           | API_ENDPOINT |             | string |         | `https://data.fixer.io` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                         Options                          |  Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------------------------------------: | :-------: |
|           | endpoint | The endpoint to use | string | [convert](#convert-endpoint), [latest](#latest-endpoint) | `convert` |

---

## Convert Endpoint

`convert` is the only supported name for this endpoint.

### Input Params

| Required? |  Name  |    Aliases     |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |  base  | `from`, `coin` |   The symbol of the currency to query    | string |         |         |            |                |
|    ✅     | quote  | `to`, `market` | The symbol of the currency to convert to | string |         |         |            |                |
|           | amount |                |      The amount of `base` currency       | number |         |   `1`   |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "base": "EUR",
    "quote": "USD"
  }
}
```

Response:

```json
{
  "result": 0.862805
}
```

---

## Latest Endpoint

Supported names for this endpoint are: `latest`, `price`, `forex`.

### Input Params

| Required? |  Name  |         Aliases         | Description | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :---------------------: | :---------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |  base  | `base`, `from`, `coin`  |             |      |         |         |            |                |
|    ✅     | quote  | `quote`, `to`, `market` |             |      |         |         |            |                |
|           | amount |                         |             |      |         |         |            |                |

### Example

There are no examples for this endpoint.

---
