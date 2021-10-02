const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>Hello World</h1>');
    response.write('<p> This is a first server i created from node js.</p>');
    response.end();
});

// giving port number dynamically 
const port = 8000;
server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});

// server.listen(3000,() => {
//     console.log('Server is running at port 3000');
// });

