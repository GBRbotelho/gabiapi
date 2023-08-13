module.exports = async (serviceId, serviceRepository) => {
  try {
    const service = await serviceRepository.getById(serviceId);
    if (!service) {
      throw { message: "serviceID not found" };
    }
    return service;
  } catch (error) {
    throw { message: error.message };
  }
};
