const { User } = require("../../db");

async function getUserType(req, res) {
    const {id} = req.params
    try {
        const user = await User.findOne({ where: { id: id }})
        return res.send(user.userType)
    }
    catch(e) {
        console.log(e)
    }
}



module.exports = {
    getUserType
}