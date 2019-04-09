const fs = require('fs');
const ws = fs.createWriteStream('./copy-copyStream.md');
const rs = fs.createReadStream('./1_streams.md');

rs
  .pipe(ws);
