const http = require('http');
const request = require('request');

const PORT = 3001;
const BING_API = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  req.pipe(request(BING_API + req.url)).pipe(res);
}).listen(PORT, () => process.stdout.write(`\nNode server is UP! on port ${PORT}\n`));
