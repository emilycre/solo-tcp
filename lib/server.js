const net = require('net');

const server = net.createServer((client) => {
  console.log('Client connected.');
  client.on('data', data => {
    console.log(data.toString());
  });
});

server.listen(7890);
