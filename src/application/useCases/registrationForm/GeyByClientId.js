module.exports = async (clientId, registrationFormRepository) => {
  try {
    const registrationForm = await registrationFormRepository.findByClientId(
      clientId
    );
    if (!registrationForm) {
      throw { message: "clientID not found" };
    }
    return registrationForm;
  } catch (error) {
    throw { message: error.message };
  }
};
