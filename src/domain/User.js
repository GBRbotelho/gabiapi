// src/domain/user.js
class User {
  constructor(username, password, email, accountLevel) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.accountLevel = accountLevel;
  }
}

module.exports = User;
