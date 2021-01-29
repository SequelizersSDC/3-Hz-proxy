const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 1337;

server.use(express.static(path.resolve(__dirname, '../public')));

server.listen(PORT, () => console.log(`proxy is listening on port ${PORT}`));