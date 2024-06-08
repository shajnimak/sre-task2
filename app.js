const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
   res.send('Hello World!');
});


let server;
const startServer = () => {
   server = app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
   });
   return server;
};


const stopServer = () => {
   if (server) {
      server.close();
   }
};
module.exports = { app, startServer, stopServer };