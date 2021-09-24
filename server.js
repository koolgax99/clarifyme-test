const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

const http = require("http").Server(app);
const io = require("socket.io");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Chat = db.chat;

db.mongoose
  .connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Clarify Me test application" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const socket = io(http);
//create an event listener

//To listen to messages
socket.on("connection", (socket) => {
  console.log("user connected");

  socket.on("chat message", function (msg, sender) {
    console.log("message: " + msg);
    socket.broadcast.emit("received", { message: msg });

    socket.broadcast.emit("received", { message: msg });

    let chatMessage = new Chat({ message: msg, sender: sender });
    chatMessage.save();
  });

  socket.on("disconnect", () => {
    console.log("Disconnected")
  })
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
