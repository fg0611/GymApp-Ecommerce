const { User } = require('../../db')

async function updateUsers(req, res) {

    const { id } = req.params
    const { firstName, lastName, email, password, userType } = req.body

    try {
        const userUpdate = await User.findOne({ where: { id } })
        if (userUpdate) {
            await userUpdate.update({
                firstName: firstName ? firstName : userUpdate.firstName,
                lastName: lastName ? lastName : userUpdate.lastName,
                email: email ? email : userUpdate.email,
                password: password ? password : userUpdate.password,
                userType: userType ? userType : userUpdate.userType,
            })
            return res.status(202).send('editado exitosamente')
        }
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {
    updateUsers
}