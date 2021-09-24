const mongoose = require("mongoose");

const Chat = mongoose.model(
    "Chat",
    new mongoose.Schema({
        message: {
            type: String
        },
        sender: {
            type: String
        }
    })
);

module.exports = Chat;
