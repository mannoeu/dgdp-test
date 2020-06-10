const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: true,
  },
});

mongoose.model("Board", BoardSchema);
