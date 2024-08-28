const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((request, response) => {
    // Route handling
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
        // File write operation
        fs.writeFile('demo.txt', 'hello world', (error) => {
            if(error){
                response.write('File written failed!');
            }
            else{
                reponse.write('File written successfully');
            }
            response.end();
        });
    }
    else{
        // Default response for undefined routes
        response.write('404 Not Found');
        response.end();
    }
});

// Start the server and listen on port 5500
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
