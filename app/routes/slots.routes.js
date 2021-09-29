const authJwt = require("./../middlewares/authJwt");
const controller = require("../controllers/slots.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/slots/book", authJwt.verifyToken, controller.bookSlot);
    app.get("/api/slots/available", controller.getAllAvailableSlots);
    app.post("/api/slots/create", controller.createSlot);
}