const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  service: String,
  price: Number,
  date: Date,
});

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  history: {
    type: [historySchema],
    default: [],
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
