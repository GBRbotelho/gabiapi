module.exports = async (consultationId, consultationRepository) => {
  try {
    const consultation = await consultationRepository.getById(consultationId);
    if (!consultation) {
      throw { message: "consultationID not found" };
    }
    const response = await consultationRepository.delete(consultation);
    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
