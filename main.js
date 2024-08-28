const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('This is the Home Page');
        response.end();
    }
    else if(request.url === '/about'){
        response.write('This is the About Page');
        response.end();
    }
    else if(request.url === '/contact'){
        response.write('This is the Contact Page');
        response.end();
    }
    else if(request.url === '/file-write'){
        fs.writeFile('demo.txt', 'hello world', (error) => {
            if(error){
                response.write('File written failed!');
            }
            else{
                response.write('File written successfully');
            }
            response.end();
        });
    }
    else{
        response.write('404 Not Found');
        response.end();
    }
});

server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
