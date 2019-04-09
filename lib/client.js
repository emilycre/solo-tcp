const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();
rl.on('line', line => {
  console.log(line);
  rl.prompt();
});

// const client = net.createConnection(7890, '192.168.1.238', () => {
//   console.log('I am connected.');
//   client.write('Hello.');
// });

