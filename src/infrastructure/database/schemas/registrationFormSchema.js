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
  lastDate: {
    type: Date,
  },
  respiratoryPain: {
    type: String,
  },
  vertigoSymptoms: {
    type: String,
  },
  strengthLoss: {
    type: String,
  },
  urinarySystem: {
    type: String,
  },
  landmark: {
    type: String,
  },
  procedures: {
    type: String,
  },
  sleepQuality: {
    type: String,
  },
  anxietyStress: {
    type: String,
  },
  activityPause: {
    type: String,
  },
  posture: {
    type: String,
  },
  assessmentConclusion: {
    type: String,
  },
  painLocation: {
    type: String,
  },
  otherLocation: {
    type: String,
  },
  sessionsNumber: {
    type: String,
  },
  method: {
    type: String,
  },
  price: {
    type: String,
  },
});

const registrationForm = mongoose.model(
  "RegistrationForm",
  registrationFormSchema
);

module.exports = registrationForm;
