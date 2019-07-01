
//Install express server
const express = require('express');

const http = requiere ('http');

const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Planning'));

app.get('*',(req,res) => {
    
res.sendFile(path.join(__dirname+'/dist/Planning/index.html'));
});

// Start the app by listening on the default Heroku port
const port= process.env.PORT || 8080;

app.set(port);

const server = http.createServer(app);

server.listen(port,()=>console.log('Running..'));
