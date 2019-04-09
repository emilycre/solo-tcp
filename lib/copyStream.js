const fs = require('fs');
const ws = fs.createWriteStream('./copy-copyStream.md')
const rs = fs.createReadStream('./1_streams.md', {
  encoding: 'utf8',
  highWaterMark: 64 * 1028
});

rs
  .pipe(ws);
