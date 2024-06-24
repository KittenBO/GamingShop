const UserModel = require('../models/user.model');

class UserService {
    async registration (email, password) {
        const candidate = await UserModel.findAll( { email })
    }
}

module.exports = new UserService();