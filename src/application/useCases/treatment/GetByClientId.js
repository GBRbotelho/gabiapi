module.exports = async (clientId, serviceRepository) => {
  try {
    const service = await serviceRepository.getByClientId(clientId);
    if (!service) {
      throw { message: "ClientID not found" };
    }
    return service;
  } catch (error) {
    throw { message: error.message };
  }
};
