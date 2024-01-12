const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Assuming you've imported the Sequelize Chat model correctly
const Chat = require("./models/chat"); // Update the path as needed

const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User with id-${socket.id} joined room - ${roomId}`);
  });

  socket.on("send_msg", async (data) => {
    console.log(data, "DATA");

    try {
      // Store the chat message in the database using Sequelize
      const newChatMessage = await Chat.create({
        content: data.content,
        client_id: data.client_id,
        company_idcompany: data.company_idcompany,
      });

      // Emit the newly stored message to the room
      socket.to(data.roomId).emit("receive_msg", newChatMessage);
    } catch (error) {
      console.error("Error occurred while saving chat message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

const PORT = 7000;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});
