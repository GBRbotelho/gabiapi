class Service {
  constructor(
    clientId,
    name,
    description,
    price,
    totalSessions,
    sessionsCompleted
  ) {
    this.clientId = clientId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.totalSessions = totalSessions;
    this.sessionsCompleted = sessionsCompleted;
  }
}

module.exports = Service;
