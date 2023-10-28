const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
