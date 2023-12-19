class Client {
  constructor(
    name,
    cpf,
    phone,
    email,
    date,
    gender,
    street,
    district,
    cep,
    city,
    state,
    knowMyWork,
    recommendation
  ) {
    this.name = name;
    this.cpf = cpf;
    this.phone = phone;
    this.email = email;
    this.date = date;
    this.gender = gender;
    this.street = street;
    this.district = district;
    this.cep = cep;
    this.city = city;
    this.state = state;
    this.knowMyWork = knowMyWork;
    this.recommendation = recommendation;
  }
}

module.exports = Client;
