const express = require('express');
const path = require('path');
const compression = require('compression');

const server = express();
const PORT = process.env.PORT || 1337;

server.use(compression());

server.use(express.static(path.resolve(__dirname, '../public')));

server.listen(PORT, () => console.log(`proxy is listening on port ${PORT}`));