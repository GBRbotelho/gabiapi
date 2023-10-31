const Treatment = require("../../../domain/Treatment");

module.exports = async (serviceData, serviceRepository) => {
  try {
    const service = new Treatment(
      serviceData.clientId,
      serviceData.name,
      serviceData.description,
      serviceData.price,
      serviceData.totalSessions,
      serviceData.sessionsCompleted
    );

    return serviceRepository.create(service);
  } catch (error) {
    throw { message: error.message || "Failed to Create treatment" };
  }
};
