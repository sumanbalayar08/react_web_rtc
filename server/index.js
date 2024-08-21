const express = require("express");
const http = require("http");
const socketIo = require("socket.io")
const cors = require("cors")
const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on('connection', (socket) => {

  console.log("A user is connected");
  console.log(socket.id);
  socket.emit("me", socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit("callEnded");
  })
  socket.on('clientMessage', (data) => {
    console.log(data)
  })

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });
  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));