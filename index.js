const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require("./app/config/db.config");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
Role = db.role;
Chat = db.chat;

db.mongoose
	.connect(dbConfig.URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Successfully connect to MongoDB.");
	})
	.catch((err) => {
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
require("./app/routes/slots.routes")(app);

io.on("connect", (socket) => {
	socket.on("join", ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return callback(error);

		socket.join(user.room);

		socket.emit("message", {
			user: "admin",
			text: `${user.name}, welcome to room ${user.room}.`,
		});
		socket.broadcast
			.to(user.room)
			.emit("message", { user: "admin", text: `${user.name} has joined!` });

		io.to(user.room).emit("roomData", {
			room: user.room,
			users: getUsersInRoom(user.room),
		});

		callback();
	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit("message", { user: user.name, text: message });

		let chatMessage = new Chat({ message: message, sender: user.name });
		chatMessage.save();
		callback();
	});

	socket.on("disconnect", () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit("message", {
				user: "Admin",
				text: `${user.name} has left.`,
			});
			io.to(user.room).emit("roomData", {
				room: user.room,
				users: getUsersInRoom(user.room),
			});
		}
	});
});

server.listen(5000, () => console.log(`Server has started at port 5000.`));
