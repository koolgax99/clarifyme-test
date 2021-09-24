const db = require("../models");
const Chat = db.chat;

exports.getChat = function (req, res) {
    Chat.find({})
        .then(chat => {
            res.json(chat);
        });
}