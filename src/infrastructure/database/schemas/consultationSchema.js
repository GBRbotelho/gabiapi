const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Agendado", "Concluido", "Faltou"],
    default: "Agendado",
  },
});

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
