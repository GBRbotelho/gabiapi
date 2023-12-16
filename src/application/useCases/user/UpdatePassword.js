const bcrypt = require("bcrypt");

module.exports = async (userId, passwordData, userRepository) => {
  console.log("Passou");
  try {
    // Verifica se o usuário existe
    const existingUser = await userRepository.getById(userId);
    if (!existingUser) {
      throw { message: "User not found" };
    }

    // Verifica se a senha atual fornecida corresponde à senha armazenada
    const passwordMatch = await bcrypt.compare(
      passwordData.currentPassword,
      existingUser.password
    );
    if (!passwordMatch) {
      throw { message: "Senha atual incorreta!" };
    }

    // Criptografa a nova senha
    const hashedNewPassword = await bcrypt.hash(passwordData.newPassword, 10);

    // Atualiza a senha do usuário
    existingUser.password = hashedNewPassword;

    // Executa a atualização no repositório
    const updatedUser = await userRepository.update(userId, {
      password: hashedNewPassword,
    });

    return updatedUser;
  } catch (error) {
    throw { error: error.message || "Failed password update" };
  }
};
