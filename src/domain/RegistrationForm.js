class RegistrationForm {
  constructor(
    clientId,
    status,
    occupation,
    physicalActivity,
    weigth,
    habits,
    medications,
    problems,
    help,
    intensity,
    timer,
    description,
    cycle,
    condition,
    worsening,
    improvement,
    episodes,
    treatments,
    lastDate,
    respiratoryPain,
    vertigoSymptoms,
    strengthLoss,
    urinarySystem,
    landmark,
    procedures,
    sleepQuality,
    anxietyStress,
    activityPause,
    posture,
    assessmentConclusion,
    painLocation,
    otherLocation,
    sessionsNumber,
    method,
    price
  ) {
    this.clientId = clientId;
    this.status = status;
    this.occupation = occupation;
    this.physicalActivity = physicalActivity;
    this.weigth = weigth;
    this.habits = habits;
    this.medications = medications;
    this.problems = problems;
    this.help = help;
    this.intensity = intensity;
    this.timer = timer;
    this.description = description;
    this.cycle = cycle;
    this.condition = condition;
    this.worsening = worsening;
    this.improvement = improvement;
    this.episodes = episodes;
    this.treatments = treatments;
    this.lastDate = lastDate;
    this.respiratoryPain = respiratoryPain;
    this.vertigoSymptoms = vertigoSymptoms;
    this.strengthLoss = strengthLoss;
    this.urinarySystem = urinarySystem;
    this.landmark = landmark;
    this.procedures = procedures;
    this.sleepQuality = sleepQuality;
    this.anxietyStress = anxietyStress;
    this.activityPause = activityPause;
    this.posture = posture;
    this.assessmentConclusion = assessmentConclusion;
    this.painLocation = painLocation;
    this.otherLocation = otherLocation;
    this.method = method;
    this.price = price;
  }
}

module.exports = RegistrationForm;
