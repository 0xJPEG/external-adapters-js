# Chainlink CoinPaprika External Adapter

Version: 1.1.5

_Note: the `-single` endpoints have the same functionality as their original endpoint, except they will only fetch data for the single asset being queried._

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

There are no environment variables for this adapter.

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                                                                   Options                                                                                    | Default  |
| :-------: | :------: | :-----------------: | :----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint), [cryptosingle](#cryptosingle-endpoint), [dominance](#dominance-endpoint), [globalmarketcap](#globalmarketcap-endpoint), [coins](#coins-endpoint) | `crypto` |

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `price`, `marketcap`, `volume`.

### Input Params

| Required? |  Name  |    Aliases     |                   Description                    |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :------------: | :----------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |  base  | `from`, `coin` |       The symbol of the currency to query        |        |         |         |            |                |
|    ✅     | quote  | `to`, `market` |     The symbol of the currency to convert to     |        |         |         |            |                |
|           | coinid |                | The coin ID (optional to use in place of `base`) | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "ETH",
    "quote": "USD",
    "resultPath": "price"
  }
}
```

Response:

```json
{
  "result": 3949.2425813062
}
```

<details>
<summary>Additional Examples</summary>

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "marketcap",
    "base": "ETH",
    "quote": "USD",
    "resultPath": "market_cap"
  }
}
```

Response:

```json
{
  "result": 466143026900
}
```

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "volume",
    "base": "ETH",
    "quote": "USD",
    "resultPath": "volume_24h"
  }
}
```

Response:

```json
{
  "result": 24136641726.138
}
```

</details>

---

## CryptoSingle Endpoint

There are no supported names for this endpoint.

### Input Params

| Required? |  Name  |    Aliases     |                   Description                    |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :------------: | :----------------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     |  base  | `from`, `coin` |       The symbol of the currency to query        | string |         |         |            |                |
|    ✅     | quote  | `to`, `market` |     The symbol of the currency to convert to     | string |         |         |            |                |
|           | coinid |                | The coin ID (optional to use in place of `base`) | string |         |         |            |                |

### Example

There are no examples for this endpoint.

---

## Dominance Endpoint

`dominance` is the only supported name for this endpoint.

### Input Params

| Required? |  Name  |    Aliases    |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :-----------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | market | `to`, `quote` | The symbol of the currency to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "dominance",
    "market": "BTC"
  }
}
```

Response:

```json
{
  "result": 44.68
}
```

---

## GlobalMarketcap Endpoint

`globalmarketcap` is the only supported name for this endpoint.

### Input Params

| Required? |  Name  |    Aliases    |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :----: | :-----------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | market | `to`, `quote` | The symbol of the currency to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "globalmarketcap",
    "market": "USD"
  }
}
```

Response:

```json
{
  "result": 2559344984924
}
```

---

## Coins Endpoint

`coins` is the only supported name for this endpoint.

### Input Params

There are no input parameters for this endpoint.

### Example

There are no examples for this endpoint.

---
