const generateRandomCode = require("../../utils/generateRandomCode");
const EmailService = require("../../../infrastructure/services/emailService");

module.exports = async (userId, repository) => {
  try {
    const emailConfirmationCode = generateRandomCode(6); // Gera um código de 6 dígitos
    const user = await repository.update(userId, { emailConfirmationCode });
    if (!user) {
      throw { message: "User not found" };
    }
    // Aqui você chamaria a função de envio de email para enviar o código
    await EmailService.sendConfirmationCodeEmail(
      emailConfirmationCode,
      user.email
    );

    return { message: "Confirmation code sent" };
  } catch (error) {
    throw { message: error.message };
  }
};
