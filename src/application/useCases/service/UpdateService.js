module.exports = async (serviceId, serviceData, serviceRepository) => {
  try {
    // Verifica se o cliente existe
    const existingService = await serviceRepository.getById(serviceId);
    if (!existingService) {
      throw { message: "service not found" };
    }

    const updatedService = await serviceRepository.update(
      serviceId,
      serviceData
    );
    return updatedService;
  } catch (error) {
    throw { message: error.message || "Failed update" };
  }
};
