const Service = require("../../../domain/Service");

module.exports = async (serviceData, serviceRepository) => {
  try {
    const service = new Service(
      serviceData.clientId,
      serviceData.name,
      serviceData.description,
      serviceData.price,
      serviceData.totalSessions,
      serviceData.sessionsCompleted
    );

    return serviceRepository.create(service);
  } catch (error) {
    throw { message: error.message || "Failed to Create service" };
  }
};
