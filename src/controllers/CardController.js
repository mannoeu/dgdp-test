const mongoose = require("mongoose");
const Card = mongoose.model("Card");

module.exports = {
  // all
  async index(req, res) {
    const { page = 1 } = req.query;
    const cards = await Card.paginate(
      {
        /* filtros como where mas como queremos todos n precisa */
      },
      { page, limit: 5 }
    );
    return res.json(cards);
  },

  // show
  async show(req, res) {
    const card = await Card.findById(req.params.id);
    return res.json(card);
  },

  // create
  async store(req, res) {
    const card = await Card.create(req.body);
    return res.json(card);
  },

  // update
  async update(req, res) {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(card);
  },

  // delete
  async destroy(req, res) {
    await Card.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
