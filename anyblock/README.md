# Chainlink External Adapter for Anyblock Analytics

## Input Params

- `endpoint`: The endpoint to use (optional, default: latest-minimum-gasprice)
- `speed`: The speed for gas price to get (required)

## Output Format

```json
{
 "jobRunID": "1",
 "data": {
  "health": true,
  "blockNumber": 10012565,
  "blockTime": 13.49748743718593,
  "slow": 7.590000233,
  "standard": 8.250000233,
  "fast": 12,
  "instant": 15.4,
  "result": 12000000000
 },
 "result": 12000000000,
 "statusCode": 200
}
```
