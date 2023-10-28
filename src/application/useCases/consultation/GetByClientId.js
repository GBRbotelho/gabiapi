module.exports = async (clientId, consultationRepository) => {
  try {
    const consultation = await consultationRepository.getByClientId(clientId);
    if (!consultation) {
      throw { message: "ClientID not found" };
    }
    return consultation;
  } catch (error) {
    throw { message: error.message };
  }
};
