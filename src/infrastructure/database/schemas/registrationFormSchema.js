const mongoose = require("mongoose");
const { Schema } = mongoose;

const registrationFormSchema = new mongoose.Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  status: {
    type: String,
  },
  occupation: {
    type: String,
  },
  physicalActivity: {
    type: String,
  },
  weigth: {
    type: String,
  },
  habits: {
    type: String,
  },
  medications: {
    type: String,
  },
  problems: {
    type: String,
  },
  help: {
    type: String,
  },
  intensity: {
    type: String,
  },
  timer: {
    type: String,
  },
  description: {
    type: String,
  },
  cycle: {
    type: String,
  },
  condition: {
    type: String,
  },
  worsening: {
    type: String,
  },
  improvement: {
    type: String,
  },
  episodes: {
    type: String,
  },
  treatments: {
    type: String,
  },
});

const registrationForm = mongoose.model(
  "RegistrationForm",
  registrationFormSchema
);

module.exports = registrationForm;
