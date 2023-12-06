const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Treatment",
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
    enum: ["Agendado", "Concluído", "Faltou"],
    default: "Agendado",
  },
  description: {
    type: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
