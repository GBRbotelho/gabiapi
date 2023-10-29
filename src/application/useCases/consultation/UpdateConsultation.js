module.exports = async (
  consultationId,
  consultationData,
  consultationRepository
) => {
  try {
    const existingConsultation = await consultationRepository.getById(
      consultationId
    );
    if (!existingConsultation) {
      throw { message: "consultation not found" };
    }

    const updatedConsultation = await consultationRepository.update(
      consultationId,
      consultationData
    );
    return updatedConsultation;
  } catch (error) {
    throw { message: error.message || "Failed update" };
  }
};
