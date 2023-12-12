module.exports = async (clientId, consultationRepository) => {
  try {
    const consultation = await consultationRepository.getByClientId(clientId);
    if (!consultation) {
      throw { message: "No consultations found for the given client ID" };
    }
    const response = await consultationRepository.deleteByClientId(clientId);
    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
