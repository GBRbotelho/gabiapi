const Service = require("../../../domain/Service");

module.exports = async (serviceData, serviceRepository) => {
  try {
    const service = new Service(
      serviceData.name,
      serviceData.description,
      serviceData.price
    );

    //Verifica se ja existe esse email no Banco de Dados
    const nameValidate = await serviceRepository.findByName(service.name);
    if (nameValidate) {
      throw { message: "Name already exists" };
    }

    return serviceRepository.create(service);
  } catch (error) {
    throw { message: error.message || "Failed to Create service" };
  }
};
