const { User } = require("../../db");


//endPoint localhost:3001/user/create
async function createUsers(req, res, next) {
  try {
    const { id, firstName, lastName, email, password, userType } = req.body
    const user = await User.findOne({ where: { email } })
    if (user) {
      return res.send('usuario ya existe')
    }
    await User.create({
      id,
      firstName,
      lastName,
      email,
      password,
      userType
    });
    return res.send('usuario creado exitosamente')
  }
  catch (e) {
    res.send(e)
  }
}





module.exports = {
  createUsers
};
