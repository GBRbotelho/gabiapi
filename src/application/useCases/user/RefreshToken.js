const jwtService = require("../../security/authentication/jwtService");

module.exports = async (token) => {
  try {
    const decodedToken = jwtService.verifyToken(token);
    if (!decodedToken) {
      return null;
    }

    console.log(decodedToken);
    const newToken = jwtService.createToken({
      userId: decodedToken.userId,
      email: decodedToken.email,
    });

    return newToken;
  } catch (error) {
    throw error;
  }
};
