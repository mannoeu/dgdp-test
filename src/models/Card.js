const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

// criando colunas
const CardSchema = new mongoose.Schema({
  boardId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

CardSchema.plugin(mongoosePaginate);
// registrando módulo
mongoose.model("Card", CardSchema);
