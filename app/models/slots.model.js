const mongoose = require("mongoose");

const Chat = mongoose.model(
    "Chat",
    new mongoose.Schema(
        {
            date: Date,
            startTime: Date,
            endTime: Date,
            mentor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            bookedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            bookingStatus: {
                type: String,
                default: 0
            }
        },
        {
            timestamp: true
        }
    )
);

module.exports = Chat;
