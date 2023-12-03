const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();

const data = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  refresh_token: process.env.REFRESH_TOKEN,
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
        user: process.env.USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
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
      from: `System <${process.env.USER}>`,
      to: recipientEmail,
      subject: "Confirmação de E-mail",
      text: `Seu código de confirmação é: ${confirmationCode}`,
    };

    await sendEmail(mailOptions);
  },
  async sendPasswordResetEmail(userEmail, resetToken) {
    let mailOptions = {
      from: `System <${process.env.USER}>`,
      to: userEmail,
      subject: "Redefinição de Senha",
      text:
        `Você solicitou a redefinição de senha. Clique no link abaixo para redefinir sua senha:\n\n` +
        `${
          process.env.PORT || process.env.PASSWORD_RESET_LINK
        }/reset-password/${resetToken}`,
    };

    await sendEmail(mailOptions);
  },
};
