# Chainlink External Adapter for IEX Cloud

Version: 1.1.4

This README was generated automatically. Please see [scripts](../../scripts) for more info.

## Environment Variables

| Required? |     Name     | Description |  Type  | Options |              Default               |
| :-------: | :----------: | :---------: | :----: | :-----: | :--------------------------------: |
|    ✅     |   API_KEY    |             | string |         |                                    |
|           | API_ENDPOINT |             | string |         | `https://cloud.iexapis.com/stable` |

---

## Input Parameters

| Required? |   Name   |     Description     |  Type  |                                  Options                                   | Default |
| :-------: | :------: | :-----------------: | :----: | :------------------------------------------------------------------------: | :-----: |
|           | endpoint | The endpoint to use | string | [stock](#stock-endpoint), [crypto](#crypto-endpoint), [eod](#eod-endpoint) | `stock` |

---

## Stock Endpoint

`stock` is the only supported name for this endpoint.

### Input Params

| Required? | Name |              Aliases              |     Description     |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :-------------------------------: | :-----------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin`, `asset`, `symbol` | The symbol to query | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "stock",
    "base": "USD"
  }
}
```

Response:

```json
{
  "result": 48.77
}
```

---

## Crypto Endpoint

`crypto` is the only supported name for this endpoint.

### Input Params

| Required? | Name  |              Aliases              |       Description        |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :---: | :-------------------------------: | :----------------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base  | `from`, `coin`, `asset`, `symbol` |   The symbol to query    | string |         |         |            |                |
|    ✅     | quote |          `to`, `market`           | The symbol to convert to | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "crypto",
    "base": "ETH",
    "quote": "USD"
  }
}
```

Response:

```json
{
  "result": 4539.44
}
```

---

## Eod Endpoint

Supported names for this endpoint are: `eod-close`, `eod`.

### Input Params

| Required? | Name |              Aliases              |     Description     |  Type  | Options | Default | Depends On | Not Valid With |
| :-------: | :--: | :-------------------------------: | :-----------------: | :----: | :-----: | :-----: | :--------: | :------------: |
|    ✅     | base | `from`, `coin`, `asset`, `symbol` | The symbol to query | string |         |         |            |                |

### Example

Request:

```json
{
  "id": "1",
  "data": {
    "endpoint": "eod",
    "base": "USD"
  }
}
```

Response:

```json
{
  "result": 48.77
}
```

---
