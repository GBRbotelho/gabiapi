module.exports = async (serviceId, serviceRepository) => {
  try {
    const service = await serviceRepository.getById(serviceId);
    if (!service) {
      throw { message: "serviceID not found" };
    }
    // Exclui o Serviço
    await serviceRepository.delete(service);

    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
