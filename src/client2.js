const express = require('express');
const server = express();
const path = require('path');

// 두번째 클라이언트를 실행하는 서버 -> 4001
server.use("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"client.html"));
});

server.listen(4001, ()=>{
    console.log("socket server started");
});
