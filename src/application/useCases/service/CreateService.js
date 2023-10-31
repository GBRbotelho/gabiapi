const Service = require("../../../domain/Service");

module.exports = async (serviceData, serviceRepository) => {
  try {
    const service = new Service(serviceData.name, serviceData.description);

    return serviceRepository.create(service);
  } catch (error) {
    throw { message: error.message || "Failed to Create Service" };
  }
};
