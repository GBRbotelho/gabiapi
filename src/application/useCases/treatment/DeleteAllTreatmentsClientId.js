module.exports = async (clientId, treatmentRepository) => {
  try {
    const treatments = await treatmentRepository.getByClientId(clientId);
    if (!treatments) {
      throw { message: "No treatments found for the given client ID" };
    }
    const response = await treatmentRepository.deleteByClientId(clientId);
    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
