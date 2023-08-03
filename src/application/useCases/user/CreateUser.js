const User = require("../../../domain/User");

module.exports = (userData, { userRepository }) => {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.password
  );
  return userRepository.create(user);
};
