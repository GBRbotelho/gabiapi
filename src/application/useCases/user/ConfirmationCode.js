module.exports = async (userId, code, repository) => {
  const user = await repository.getById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.emailConfirmationCode === code) {
    user.isEmailVerified = "SIM";
    await repository.update(userId, user);

    return { success: true };
  } else {
    return { success: false };
  }
};
