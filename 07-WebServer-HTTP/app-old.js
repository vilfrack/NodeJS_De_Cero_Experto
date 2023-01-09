const http = require('http');

http.createServer((request, response) => {
    
    
    response.write('hola mundo');
    response.end()

    
}).listen(8181);

console.log('Escuchando en el puerto');