const generateRandomToken = require("../../utils/generateRandomCode");
const EmailService = require("../../../infrastructure/services/emailService");

module.exports = async (userEmail, repository) => {
  try {
    const user = await repository.findByEmail(userEmail);

    if (!user) {
      return { success: false };
    }

    const resetToken = generateRandomToken(7); // Gera um token de redefinição

    // Atualize o usuário com o token de redefinição
    user.resetPasswordToken = resetToken;
    await repository.update(user._id, user);

    // Aqui você chamaria a função de envio de email para enviar o link
    await EmailService.sendPasswordResetEmail(userEmail, resetToken);

    return true;
  } catch (error) {
    throw { message: error.message };
  }
};
