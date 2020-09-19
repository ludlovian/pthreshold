# pthreshold
Promise that fires when threshold reached

## API

### PThreshold
`const pt = new PThreshold(limit)`

Creates a new promise with an associated limit. The promise is fired when the value exceeds the limit

### .limit
`pt.limit = 10`

Get/set the current limit.

### .value
`pt.value++`

Gets/sets the current value. If the value is set to above the threshold, the promise fires
