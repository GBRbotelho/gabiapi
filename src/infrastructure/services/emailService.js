const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "gabrielbbotelho05@gmail.com",
    pass: "G4br13l123",
  },
});

module.exports = {
  async sendConfirmationCodeEmail(confirmationCode, recipientEmail) {
    const mailOptions = {
      from: "gabrielbbotelho05@gmail.com",
      to: recipientEmail,
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
};
