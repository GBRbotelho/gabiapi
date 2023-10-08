const Client = require("../../../domain/Client");

module.exports = async (clientData, clientRepository) => {
  try {
    const client = new Client(
      clientData.name,
      clientData.cpf,
      clientData.phone,
      clientData.email,
      clientData.date,
      clientData.gender,
      clientData.street,
      clientData.district,
      clientData.cep,
      clientData.city,
      clientData.state
    );

    const cpfValidate = await clientRepository.findByCpf(client.cpf);
    if (cpfValidate) {
      throw { message: "CPF already exists" };
    }

    return clientRepository.create(client);
  } catch (error) {
    throw { message: error.message || "Failed to Create client" };
  }
};
