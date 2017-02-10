is-not-empty
=========

Simple module for checking object or array for emptyness


## Installation
```bash
npm install is-not-empty --save
```

## Usage

```javascript
const isNotEmpty = require('is-not-empty');

isNotEmpty.object({});  // => false
isNotEmpty.array([]);   // => false
```
