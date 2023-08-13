module.exports = async (clientId, clientData, clientRepository) => {
  try {
    // Verifica se o cliente existe
    const existingClient = await clientRepository.getById(clientId);
    if (!existingClient) {
      throw { message: "Client not found" };
    }

    const updatedClient = await clientRepository.update(clientId, clientData);
    return updatedClient;
  } catch (error) {
    throw { message: error.message || "Failed update" };
  }
};
