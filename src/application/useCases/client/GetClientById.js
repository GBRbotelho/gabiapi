module.exports = async (clientId, clientRepository) => {
  try {
    const client = await clientRepository.getById(clientId);
    if (!client) {
      throw { message: "clientID not found" };
    }
    return client;
  } catch (error) {
    throw { message: error.message };
  }
};
