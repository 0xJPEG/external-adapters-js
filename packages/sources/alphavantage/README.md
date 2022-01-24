# Chainlink External Adapter for AlphaVantage

Version: 1.1.4

Use this adapter for connecting to [AlphaVantage's API](https://www.alphavantage.co/documentation/) from a Chainlink node.

##### NOTE: the `price` endpoint is temporarily still supported, however, is being deprecated. Please use the `forex` endpoint instead.

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |  Name   |                                        Description                                        |  Type  | Options | Default |
| :-------: | :-----: | :---------------------------------------------------------------------------------------: | :----: | :-----: | :-----: |
|    ✅     | API_KEY | An API key that can be obtained from [here](https://www.alphavantage.co/support/#api-key) | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |         Options          | Default |
| :-------: | :------: | :-----------------: | :----: | :----------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [forex](#forex-endpoint) | `forex` |

---

## Forex Endpoint

Supported names for this endpoint are: `forex`, `price`.

### Input Params

| Required? | Name  |    Aliases     |                                                                                                                   Description                                                                                                                   |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin` |   The symbol of the currency to query. The full list of options can be found here [Physical Currency list](https://www.alphavantage.co/physical_currency_list/) or [Cryptocurrency list](https://www.alphavantage.co/digital_currency_list/)    | string |         |         |            |                |
|    ✅     | quote | `to`, `market` | The symbol of the currency to convert to. The full list of options can be found here [Physical Currency list](https://www.alphavantage.co/physical_currency_list/) or [Cryptocurrency list](https://www.alphavantage.co/digital_currency_list/) | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "base": "GBP",
    "quote": "USD"
  }
}
```

Response:

```json
{
  "result": 1.36606
}
```

---
