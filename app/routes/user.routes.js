const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/user", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

  // Retrieve all Tutorials
  app.get("/api/user", [authJwt.verifyToken, authJwt.isAdmin], controller.findAll);

  // Retrieve a single Tutorial with id
  app.get("/api/user/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.findOne);

  // Update a Tutorial with id
  app.put("/api/user/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.update);

  // Delete a Tutorial with id
  app.delete("/api/user/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.delete);

  // Create a new Tutorial
  app.delete("/api/user", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteAll);

};
