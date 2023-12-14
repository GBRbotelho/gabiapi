const jwtService = require("../../application/security/authentication/jwtService"); // Ajuste o caminho de acordo com a estrutura do seu projeto

function authenticationMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(450).json({ error: "Access denied. Token missing." });
  }

  try {
    const decoded = jwtService.verifyToken(token);
    if (!decoded) {
      return res.status(450).json({ error: "Access denied. Invalid token." });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(450).json({ error: "Access denied. Invalid token." });
  }
}

module.exports = authenticationMiddleware;
