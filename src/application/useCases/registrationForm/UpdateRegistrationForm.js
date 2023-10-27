module.exports = async (clientId, data, registrationFormRepository) => {
  try {
    const existingRegistrationForm =
      await registrationFormRepository.findByClientId(clientId);
    if (!existingRegistrationForm) {
      throw { message: "Client not found" };
    }

    const updatedRegistrationForm = await registrationFormRepository.update(
      data._id,
      data
    );
    return updatedRegistrationForm;
  } catch (error) {
    throw { message: error.message || "Failed update" };
  }
};
