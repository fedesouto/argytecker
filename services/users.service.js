const UserModel = require("../models/User")

const usersService = {}

usersService.findByUsername = async (username) => {
    try {
        return await UserModel.findOne({username: username})
    } catch (error) {
        throw error;
    }
}

usersService.create = async (userDto) => {
    try {
        return await UserModel.create(userDto)
    } catch (error) {
        throw error;
    }
}

module.exports = usersService;