const { User } = require('../../db')



async function deleteUser(req, res, next) {
  const { id } = req.params;
  try {
    const deleteUser = await User.destroy({ where: { id } })
    return res.status(202).send('usuario eliminado');
  } catch (error) {
    next(error);
  }
}


module.exports = {
  deleteUser
}