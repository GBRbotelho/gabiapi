class Client {
  constructor(
    name,
    cpf,
    phone,
    email,
    date,
    gender,
    adress,
    district,
    cep,
    city,
    state
  ) {
    this.name = name;
    this.cpf = cpf;
    this.phone = phone;
    this.email = email;
    this.date = date;
    this.gender = gender;
    this.adress = adress;
    this.district = district;
    this.cep = cep;
    this.city = city;
    this.state = state;
  }
}

module.exports = Client;
