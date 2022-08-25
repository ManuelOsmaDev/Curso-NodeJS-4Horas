const http  = require('http');

const server  = http.createServer((req,res) => {
    if(req.url  === '/'){
        res.write("welcome to my server");
        return res.end()
    }if(req.url === '/about'){

        // for (let index = 0; index < 100; index++) {
        //     console.log(Math.random() * index);
        // }

        res.write("abput of my page");
        return res.end();
    }
        res.end('page NOT FOUND')
})

server.listen(3000)
console.log("server run port #3000");


