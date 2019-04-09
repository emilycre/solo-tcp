const net = require('net');

const server = net.createServer(() => {
  console.log('Client connected.');
});

server.listen(7890);
