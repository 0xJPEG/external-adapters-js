# Chainlink Open Exchange Rates External Adapter

Version: 1.3.2

NOTE: the `price` endpoint is temporarily still supported, however, is being deprecated. Please use the `forex` endpoint instead.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     |                                    Description                                    |  Type  | Options |               Default                |
| :-------: | :----------: | :-------------------------------------------------------------------------------: | :----: | :-----: | :----------------------------------: |
|    ✅     |   API_KEY    | An API key that can be obtained from [here](https://openexchangerates.org/signup) | string |         |                                      |
|           | API_ENDPOINT |                                                                                   | string |         | `https://openexchangerates.org/api/` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |         Options          | Default |
| :-------: | :------: | :-----------------: | :----: | :----------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [forex](#forex-endpoint) | `forex` |

---

## Forex Endpoint

Supported names for this endpoint are: `forex`, `price`.

### Input Params

| Required? | Name  |    Aliases     |               Description                | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :--------------------------------------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin` |   The symbol of the currency to query    |      |         |         |            |                |
|    ✅     | quote | `to`, `market` | The symbol of the currency to convert to |      |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "forex",
    "base": "ETH",
    "quote": "USD"
  }
}
```

Response:

```json
{
  "result": 4483.820268
}
```

---
