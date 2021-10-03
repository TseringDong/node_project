// without using express 

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write('<h1>Hello World and Nepal</h1>');
    // response.write('<p> This is a first server i created from node js.</p>');
    // response.end();
    let content  = "";
    switch(request.url){
        case "/":
            content = "<h1> This is root page </h1>"
        break;
        case "/profile":
            content = "<h1> This is profile page </h1>" 
        break;
        case "/about":
            content = "<h1> This is about page </h1>" 
        break;
        default: 
        content = "<h1> This is 404 page </h1>"
        statusCode = 404;
    }
     response.writeHead(200, { 'Content-Type': 'text/html' });
     response.write(content);
     response.end();
});


// giving port number dynamically 
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});

// server.listen(3000,() => {
//     console.log('Server is running at port 3000');
// });

