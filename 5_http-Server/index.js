
const http = require('http')
const fs = require('fs');
const url = require('url')

const myServer = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return res.end();
    const log  = `${Date.now()}: ${url.method}, ${req.url} New Req Recieved\n`
    const myUrl = url.parse(req.url); // this will give the whole data about the re url
    console.log(myUrl) 
    fs.appendFile("log.txt", log, (err, data)=>{
        switch (req.url){
            case '/':
                res.end('Homepage')
                break
            case '/about':
                res.end('About Page')
                break
            default:
                res.end('404 Not found')
        }
    })
    // console.log('New req recieved!')
    // console.log(req.headers);
    // console.log(req);
    
    
    // res.end('Hello from server');
})
myServer.listen(3000, ()=> console.log('server started!'))// ye console log ye chack krne k liye hai ki, sab kuch thik chal rha hai

/*
  This code creates a simple HTTP server using Node.js.
  - The server listens on port 3000 and handles all incoming requests.
  - For every request, a log entry is created with the timestamp and URL,
    which is then appended to "log.txt" using fs.appendFile().
  - Based on the requested URL (req.url), different responses are sent:
        "/"       → Homepage
        "/about"  → About Page
        any other → 404 Not Found
  - The callback inside appendFile ensures that the log is written 
    before sending the response.
  - console.log in listen() confirms the server is running.
*/
