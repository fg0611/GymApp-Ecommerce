const { Category, Product, User } = require("../../db");
const { products: productsSeed, users } = require("../../../seeds");

// Solo crea users del seeds
async function createUsersSeeds() {
  try {
    users.forEach(
      async ({ id, firstName, lastName, email, password, userType }) =>
        await User.findOrCreate({
          where: { id },
          defaults: { firstName, lastName, email, password, userType },
        })
    );
    console.log("DB precargada con users seeds");
  } catch (err) {
    console.log(err);
    console.log("Error en create users seeds");
  }
}

module.exports = {
  createUsersSeeds,
};
