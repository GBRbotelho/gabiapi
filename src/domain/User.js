// src/domain/user.js
class User {
  constructor(firstName, lastName, password, email, accountLevel = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.accountLevel = accountLevel;
  }
}

module.exports = User;
