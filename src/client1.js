const express = require('express');
const server = express();
const path = require('path');

// 첫번째 클라이언트를 실행하는 서버 -> 4000
server.use("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"client.html"));
});

server.listen(4000, ()=>{
    console.log("socket server started");
});
