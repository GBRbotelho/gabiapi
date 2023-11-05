const jwtService = require("../../security/authentication/jwtService");

async function getUserData(token, userRepository) {
  try {
    if (!token) {
      return null;
    }

    const decoded = await jwtService.verifyToken(token);
    if (!decoded) {
      return null;
    }
    const user = await userRepository.getById(decoded.userId);

    return user;
  } catch (error) {
    return null;
  }
}

module.exports = getUserData;
