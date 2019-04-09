const net = require('net');

const client = net.createConnection(7890, '192.168.1.238', () => {
  console.log('I am connected.');
  client.write('Hello.');
});

