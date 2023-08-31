const nodemailer = require("nodemailer");
const config = require("../../../config");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.user,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken,
    acessToken: config.acessToken,
  },
});

module.exports = {
  async sendConfirmationCodeEmail(confirmationCode, recipientEmail) {
    let mailOptions = {
      from: `System <${config.user}>`, // Use o endereço de e-mail configurado nas variáveis de ambiente
      to: recipientEmail, // Use o e-mail do destinatário que você passou como argumento para a função
      subject: "Confirmação de E-mail",
      text: `Seu código de confirmação é: ${confirmationCode}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("E-mail enviado:", info.response);
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  },
  async sendPasswordResetEmail(userEmail, resetToken) {
    let mailOptions = {
      from: `System <${config.user}>`,
      to: userEmail,
      subject: "Redefinição de Senha",
      text:
        `Você solicitou a redefinição de senha. Clique no link abaixo para redefinir sua senha:\n\n` +
        `${config.frontendBaseUrl}/reset-password/${resetToken}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("E-mail de redefinição de senha enviado:", info.response);
    } catch (error) {
      console.error("Erro ao enviar e-mail de redefinição de senha:", error);
    }
  },
};
