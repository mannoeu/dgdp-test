const express = require("express");
const routes = express.Router();
const CardController = require("./controllers/CardController");
const BoardController = require("./controllers/BoardController");

/* Product Route */
routes.get("/cards", CardController.index);
routes.get("/card/:id", CardController.show);
routes.post("/card", CardController.store);
routes.put("/card/:id", CardController.update);
routes.delete("/card/:id", CardController.destroy);

routes.get("/boards", BoardController.index);
routes.get("/board/:id", BoardController.show);
routes.post("/board", BoardController.store);
routes.put("/board/:id", BoardController.update);
routes.delete("/board/:id", BoardController.destroy);

module.exports = routes;
