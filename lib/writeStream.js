const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a'
});

ws.write('{');
ws.write('\n\t"Name": "Spot", ');
ws.write('\n\t');
ws.write('"Age": 5, ');
ws.write('\n\t');
ws.write('"Weight": "10 lbs"');
ws.write('\n');
ws.write('}');

ws.end();
