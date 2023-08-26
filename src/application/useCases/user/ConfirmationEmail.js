const generateRandomCode = require("../../utils/generateRandomCode");
const EmailService = require("../../../infrastructure/services/emailService");

module.exports = async (userId, userEmail, repository) => {
  try {
    const emailConfirmationCode = generateRandomCode(6); // Gera um código de 6 dígitos
    await repository.update(userId, { emailConfirmationCode });

    // Aqui você chamaria a função de envio de email para enviar o código
    await EmailService.sendConfirmationCodeEmail(
      emailConfirmationCode,
      userEmail
    );

    return { message: "Confirmation code sent" };
  } catch (error) {
    throw { message: error.message };
  }
};
