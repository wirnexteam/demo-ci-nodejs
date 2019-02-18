const http = require('http');
const url = require('url');
const utils = require('./helpers/utils');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const queryData = url.parse(req.url, true).query;
  if ('a' in queryData && 'b' in queryData) {
    const { a, b } = queryData;
    res.write(`sum of ${a} and ${b} is ${utils.sum(a, b)}`);
  }
  res.end();
});

server.listen('1337');