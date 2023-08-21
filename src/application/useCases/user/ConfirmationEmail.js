const generateRandomCode = require("../../utils/generateRandomCode");
const EmailService = require("../../../infrastructure/services/emailService");
const UserRepository = require("../../../infrastructure/repositories/userRepository");

module.exports = async (userId) => {
  try {
    const confirmationCode = generateRandomCode(6); // Gera um código de 6 dígitos
    await UserRepository.update(userId, { confirmationCode });

    // Aqui você chamaria a função de envio de email para enviar o código
    await EmailService.sendConfirmationCodeEmail(confirmationCode, userId);

    return { message: "Confirmation code sent" };
  } catch (error) {
    throw { message: error.message };
  }
};
