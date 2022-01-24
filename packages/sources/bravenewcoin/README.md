# Chainlink External Adapter for BraveNewCoin

Version: 1.1.4

##### NOTE: the `price` endpoint is temporarily still supported, however, is being deprecated. Please use the `crypto` endpoint instead.

[BraveNewCoin's AssetTicker endpoint](https://rapidapi.com/BraveNewCoin/api/bravenewcoin?endpoint=apiendpoint_836afc67-19d2-45ae-bb56-c576cec9f602)

VWAP endpoint [BraveNewCoin's 24 Hour USD VWAP](https://rapidapi.com/BraveNewCoin/api/bravenewcoin?endpoint=apiendpoint_8b8774ba-b368-4399-9c4a-dc78f13fc786)

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |   Name    | Description |  Type  | Options | Default |
| :-------: | :-------: | :---------: | :----: | :-----: | :-----: |
|    ✅     |  API_KEY  |             | string |         |         |
|    ✅     | CLIENT_ID |             | string |         |         |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                      Options                       | Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint), [vwap](#vwap-endpoint) | `crypto` |

---

## Crypto Endpoint

Supported names for this endpoint are: `crypto`, `price`.

### Input Params

| Required? | Name  |    Aliases     |               Description                |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :------------: | :--------------------------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin` |   The symbol of the currency to query    | string |         |         |            |                |
|    ✅     | quote | `to`, `market` | The symbol of the currency to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "ETH",
    "quote": "BTC"
  }
}
```

Response:

```json
{
  "result": 0.06453350218072039
}
```

---

## Vwap Endpoint

`vwap` is the only supported name for this endpoint.

### Input Params

| Required? |   Name    |                             Aliases                             |                                                                       Description                                                                       |  Type  |   Options    | Default | Depends On | Not Valid With |
| :-------: | :-------: | :-------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :----: | :----------: | :-----: | :--------: | :------------: |
|    ✅     |  symbol   | `base`, `from`, `coin`, `symbol`, `assetId`, `indexId`, `asset` |                                             Retrieve all the OHLCV values for a particular asset or market                                              | string |              |         |            |                |
|           | indexType |                         `to`, `market`                          |                                                      Restrict the OHLCV results to the index type.                                                      | string | `MWA`, `GWA` |  `GWA`  |            |                |
|           | timestamp |                                                                 | Retrieve all daily OHLCV records from the timestamp provided. All dates are stored in UTC. Timestamp strings should be in the form YYYY-MM-DDThh:mm:ssZ |        |              |         |            |                |

### Example

Request:

```json
{
  "id": "2",
  "data": {
    "endpoint": "vwap",
    "symbol": "ETH",
    "indexType": "GWA"
  }
}
```

Response:

```json
{
  "result": 3969.76725876602
}
```

---
