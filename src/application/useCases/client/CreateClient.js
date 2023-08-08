const Client = require("../../../domain/Client");

module.exports = async (clientData, clientRepository) => {
  try {
    const client = new Client(
      clientData.name,
      clientData.cpf,
      clientData.phone,
      clientData.email,
      clientData.date
    );

    //Verifica se ja existe esse email no Banco de Dados
    const emailValidate = await clientRepository.findByCpf(client.cpf);
    if (emailValidate) {
      throw { message: "Email already exists" };
    }

    return clientRepository.create(client);
  } catch (error) {
    throw { message: error.message || "Failed to Create client" };
  }
};
