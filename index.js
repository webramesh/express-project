const http = require("http");
const app = require("./src/config/express.config");

const server = http.createServer(app);

server.listen("3002", "localhost",(err) => {
    if(!err){
        console.log("Server created successfully and running on port 3002");
        console.log("Stop server with CTRL+C");
        console.log("User can use http://localhost:3002 in the browser to run the application");
    }
})