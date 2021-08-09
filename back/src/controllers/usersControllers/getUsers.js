const { User } = require("../../db");

async function getUsers(req, res) {

    try {
        const users = await User.findAll()
        return res.send(users)
    }
    catch(e) {
        console.log(e)
    }
}



module.exports = {
    getUsers
}