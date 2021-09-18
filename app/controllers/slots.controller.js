const db = require("../models");
const Slots = db.slots;

exports.getAvailableSlots = (req, res) => {
    Slots.findOne({ bookingStatus: 0 })
        .then(slots => {
            res.send({
                message: "Success",
                data: slots
            });
        })
        .catch(err => {
            res.send({
                message: "Error",
                data: err
            })
        })
}

exports.bookSlot = (req, res) => {
    bookedBy = req.body.bookedBy;
    slotId = req.body.slotId;

    Slots.findOne({ _id: slotId })
        .then(slot => {
            if (slot.bookingStatus != 0) {
                res.send({
                    message: "Slot is already booked"
                });
            }
            else {
                slot.bookingStatus = 1;
                slot.bookedBy = bookedBy;
                slot.save()
                    .then(slot => {
                        res.send({
                            message: "Slot Booked successfully!!",
                            data: slot
                        });
                    })
            }
        })
        .catch(err => {
            res.send({
                message: "Error",
                data: err
            })
        })
}