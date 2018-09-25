const express = require('express');
const http = require('http');

const socketIO = require('socket.io');
const IOClient = require('socket.io-client');

const ws = require('ws');
const w = new ws('wss://ws.cex.io/ws/');


// our localhost port
const port = 4001;
const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);


server.listen(port, () => console.log(`Listening on port ${port}`));
