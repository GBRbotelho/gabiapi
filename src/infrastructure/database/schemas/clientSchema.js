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
  surname: {
    type: String,
  },
  cpf: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Masculino", "Feminino", "Prefiro não informar"],
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
  knowMyWork: {
    type: String,
    required: false,
  },
  recommendation: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
