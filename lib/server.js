const net = require('net');

const server = net.createServer((connectedClient) => {
  console.log('Client connected.');
  
  client.on('data', data => {
    console.log(data);
    connectedClient.write(`ECHO FROM SERVER: ${data}`);
  });
});

server.listen(7890);
