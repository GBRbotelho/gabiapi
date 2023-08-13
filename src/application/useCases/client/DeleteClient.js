module.exports = async (clientId, clientRepository) => {
  try {
    const client = await clientRepository.getById(clientId);
    if (!client) {
      throw { message: "clientID not found" };
    }
    // Exclui o usuario
    await clientRepository.delete(client);

    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
