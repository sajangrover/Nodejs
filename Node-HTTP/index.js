const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000

const server = http.createServer((req,res) =>{

    if(req.method == 'GET') {
        let fileUrl;
        if(req.url=='/') fileUrl='/index.html';
        else fileUrl = req.url;

        const filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);

        if(fileExt == '.html'){
            fs.exists(filePath ,(exists) => {
                if(exists){
                    res.statusCode = 200;
                    res.setHeader('Content-Type','text/html');
                    fs.createReadStream(filePath).pipe(res)
                }
                else{
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>404 error</h1><p>Page not found</p></body></html>');
                }
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>404 error</h1><p>It is not a html page</p></body></html>');
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>404 error</h1><p>request method not suported</p></body></html>');
    }
})

server.listen(port,hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
})