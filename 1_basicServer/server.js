const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('home page')
    }else if(req.url === '/profile'){
        res.end('profile page')
    }else{
        res.end('error')
    }
})

server.listen(3000)