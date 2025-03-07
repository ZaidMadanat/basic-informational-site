const http = require('http');
const fs = require('fs');
const { URL } = require('url');

/**
 * Checks filename and returns corresponding page dynamically. 
 * @param {*} req 
 * @param {*} res 
 */
const requestListener = (req, res) => {
    const filePath = new URL(req.url, 'http://localhost');
    let filename = "";
    console.log(filename)
    if (filePath.pathname === "/") { 
        filename = "index.html"; 
    }
    else if (filePath.pathname === "/contact-me") { 
        filename = "contact-me.html";
    }
    else if (filePath.pathname === "/about") { 
        filename = "about.html";
    }
    else { 
        filename = "404.html";
    }

    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); 
            return res.end();
        });    
}


http.createServer(requestListener).listen(8080);
