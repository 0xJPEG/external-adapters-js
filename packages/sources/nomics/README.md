# Chainlink External Adapter for Nomics

Version: 1.0.20

An API key that can be obtained from [here](https://p.nomics.com/pricing#free-plan)

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     | Description |  Type  | Options |           Default           |
| :-------: | :----------: | :---------: | :----: | :-----: | :-------------------------: |
|    ✅     |   API_KEY    |             | string |         |                             |
|           | API_ENDPOINT |             | string |         | `https://api.nomics.com/v1` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                                 Options                                                  | Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------------------------------------------------------------------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [globalmarketcap](#globalmarketcap-endpoint), [crypto](#crypto-endpoint), [filtered](#filtered-endpoint) | `crypto` |

---

## Globalmarketcap Endpoint

`globalmarketcap` is the only supported name for this endpoint.

### Input Params

There are no input parameters for this endpoint.

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "globalmarketcap"
  }
}
```

Response:

```json
{
  "result": 2810702841731
}
```

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `price`, `marketcap`, `volume`.

### Input Params

| Required? | Name  |          Aliases          |               Description                | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :-----------------------: | :--------------------------------------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  |   `from`, `coin`, `ids`   |   The symbol of the currency to query    |      |         |         |            |                |
|    ✅     | quote | `to`, `market`, `convert` | The symbol of the currency to convert to |      |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "BTC",
    "quote": "EUR",
    "resultPath": "price"
  }
}
```

Response:

```json
{
  "result": 53835.22386957
}
```

---

## Filtered Endpoint

`filtered` is the only supported name for this endpoint.

### Input Params

| Required? |   Name    |       Aliases        |              Description               | Type | Options | Default | Depends On | Not Valid With |
| :-------: | :-------: | :------------------: | :------------------------------------: | :--: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |   base    | `from`, `coin`, `id` |  The symbol of the currency to query   |      |         |         |            |                |
|    ✅     | exchanges |                      | Comma delimited list of exchange names |      |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "filtered",
    "base": "LINK",
    "exchanges": "binance,coinbase",
    "resultPath": "price"
  }
}
```

Response:

```json
{
  "result": 77.77
}
```

---
