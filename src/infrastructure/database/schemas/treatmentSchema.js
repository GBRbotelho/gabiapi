const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  totalSessions: {
    type: Number,
    required: true,
  },
  sessionsCompleted: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["Em andamento", "Concluido", "Cancelado"],
    default: "Em andamento",
  },
});

const Service = mongoose.model("Treatment", serviceSchema);

module.exports = Service;
