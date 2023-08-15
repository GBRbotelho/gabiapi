module.exports = async (clientId, historyData, clientRepository) => {
  try {
    const client = await clientRepository.findById(clientId);

    if (!client) {
      throw new Error("Client not found");
    }

    client.history.push(historyData);

    return await clientRepository.update(clientId, client);
  } catch (error) {
    throw { message: error.message || "Failed to Add History to Client" };
  }
};
