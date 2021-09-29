const mongoose = require("mongoose");

const Slot = mongoose.model(
    "Slot",
    new mongoose.Schema(
        {
            date: Date,
            startTime: String,
            endTime: String,
            mentor: String,
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

module.exports = Slot;
