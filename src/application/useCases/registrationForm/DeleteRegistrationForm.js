module.exports = async (clientId, registrationFormRepository) => {
  try {
    const registrationForm = await registrationFormRepository.findByClientId(
      clientId
    );
    if (!registrationForm) {
      throw { message: "registrationFormID not found" };
    }
    await registrationFormRepository.delete(registrationForm);

    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
