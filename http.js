const http = require('http');

http.createServer( (req,res) => {
    
    if (req.url === '/') {
        res.write('Bienvenido a mi server');
        return res.end();
    }
    if(req.url === '/about'){
        res.write('acerca de');
        return res.end()
    }
        res.write(`
        <h1>Not Found </h1>
        <p>Esta pagina no se Ha podido encontrar </p>
        <a href="/">Volver a la pagina principal</a>
        `);
        res.end()
    

}).listen(3000)

console.log("servidor escuchando en el server 3000");