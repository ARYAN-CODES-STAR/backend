const http = require("http");

const server = http.createServer((req,res) => {
    res.writeHead(200,{ 'Content-type': 'text/plain'});
    res.end("Hello World");
})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server is running at a high speed of at ${PORT} `);
});