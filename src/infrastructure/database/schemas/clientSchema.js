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
  gender: {
    type: String,
    enum: ["Masculino", "Feminino", "Outro"],
    required: false,
  },
  street: {
    type: String,
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
  cep: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
