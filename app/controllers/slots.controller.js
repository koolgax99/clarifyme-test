const moment = require('moment')
const db = require("../models");
const Slots = db.slots;

exports.createSlot = (req, res) => {
    let date = req.body.date;
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;

    Slots.create({
        mentor: req.body.mentor,
        date: date,
        startTime: startTime,
        endTime: endTime,
        bookingStatus: 0
    })
        .then(slot => {
            res.send({
                message: "Slot created successfully!!",
                data: slot
            });
        })
        .catch(err => {
            res.send({
                message: "Error",
                data: err
            })
        })
}

exports.getAllAvailableSlots = (req, res) => {
    let date = new Date();
    console.log(date);
    let startTime = date.getHours();
    startTime.toString();

    Slots.find({ bookingStatus: 0, startTime: { "$gt": startTime } })
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

exports.getSlots = (req, res) => {
    Slots.find({ bookingStatus: 0 })
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

