const net = require('net');

const server = net.createServer((client) => {
  console.log('Client connected.');
  
  client.pipe(client);
  // client.on('data', data => {
  //   client.write(data);
  // });
});

server.listen(7890);
