const mongoose = require("mongoose");

const Board = mongoose.model("Board");

module.exports = {
  async index(req, res) {
    const boards = await Board.find();

    return res.json(boards);
  },

  async show(req, res) {
    const board = await Board.findById(req.params.id);

    return res.json(board);
  },

  async store(req, res) {
    const board = await Board.create(req.body);

    return res.json(board);
  },

  async update(req, res) {
    const board = await Board.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(board);
  },

  async destroy(req, res) {
    await Board.findOneAndRemove(req.params.id);

    return res.json();
  },
};
