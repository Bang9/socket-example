const io = require('socket.io')(3000);

/**
 * clients = {
 *     4abc9dk2cad7zd: socket,
 *     ...
 * }
 * */
const clients = {};

// emit -> 상대한테 이벤트를 보냄
// on -> 상대로부터 이벤트를 수신
// 서버 -> 클라이언트 끼리의 메세지를 전송해주는 역할
// 3000번 포트에 실행
io.on("connection", (socket) => {
    console.log("socket connection", socket.id);
    clients[socket.id] = socket;

    // 클라이언트로부터 send 이벤트를 수신받겠다.
    socket.on("send", (data) => {
        console.log("send event emitted from", socket.id);
        const others = Object.values(clients).filter(client => client.id !== socket.id);

        // 배열 -> 나를 제외한 모든 클라이언트들의 배열
        others.forEach(other => {
            console.log("receive event emit to", other.id);
            // 클라이언트에 receive 이벤트를 전송하겠다.
            other.emit("receive", data);
        });
    });

    socket.on('disconnect', () => {
        console.log("socket disconnect", socket.id);
        delete clients[socket.id];
    })
});
