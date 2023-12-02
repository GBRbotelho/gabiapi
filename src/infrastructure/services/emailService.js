const nodemailer = require("nodemailer");
const config = require("../../../config");
const axios = require("axios");

const data = {
  client_id: config.clientId,
  client_secret: config.clientSecret,
  refresh_token: config.refresh_token,
  grant_type: "refresh_token",
};

const createTransporter = async () => {
  try {
    const response = await axios.post(
      "https://oauth2.googleapis.com/token",
      data
    );
    const accessToken = response.data.access_token;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.user,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        accessToken: accessToken,
      },
    });

    return transporter; // Retornar o transporter criado
  } catch (error) {
    console.error("Erro ao obter novo token de acesso:", error);
    throw error;
  }
};

async function sendEmail(mailOptions) {
  try {
    const transporter = await createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info.response);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
}

module.exports = {
  async sendConfirmationCodeEmail(confirmationCode, recipientEmail) {
    let mailOptions = {
      from: `System <${config.user}>`,
      to: recipientEmail,
      subject: "Confirmação de E-mail",
      text: `Seu código de confirmação é: ${confirmationCode}`,
    };

    await sendEmail(mailOptions);
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

    await sendEmail(mailOptions);
  },
};
