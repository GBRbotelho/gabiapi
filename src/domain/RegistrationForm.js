class RegistrationForm {
  constructor(
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
    treatments
  ) {
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
  }
}

module.exports = RegistrationForm;
