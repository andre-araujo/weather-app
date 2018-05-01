const path = require('path');
const express = require('express');
const request = require('request');

const isProd = process.env.NODE_ENV === 'production';

const app = express();

const PORT = 3001;
const BING_API = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

app.use(express.static(path.join(__dirname, './dist')));

app.get('/highlighted-info', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  req.pipe(request(BING_API + req.url)).pipe(res);
});

app.listen(PORT, () => process.stdout.write(isProd ? `\nNode server is up on port ${PORT}!\n` : `\nNode server is at http://localhost:${PORT}!\n`));
