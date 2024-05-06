// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create server
http.createServer((req, res) => {
    // Parse URL
    const urlObj = url.parse(req.url, true);
    const pathname = urlObj.pathname;

    // Get file path
    const filePath = path.join(__dirname, pathname);

    // Read file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });

}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server using node comments.js and go to http://localhost:3000 in your browser.

// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create server
http.createServer((req, res) => {
    // Parse URL
    const urlObj = url.parse(req.url, true);
    const pathname = urlObj.pathname;

    // Get file path
    const filePath = path.join(__dirname, pathname);

    // Read file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });

}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server using node comments.js and go to http://localhost:3000 in your browser.

// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create server
http.createServer((req, res) => {
    // Parse URL
    const urlObj = url.parse(req.url, true);