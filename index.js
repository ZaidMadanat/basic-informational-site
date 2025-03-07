// const axios = require('axios');
const http = require('http');
let fs = require('fs')



const requestListener = (req, res) => { 
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); 
            return res.end();
        });    
}


http.createServer(requestListener).listen(8080);
