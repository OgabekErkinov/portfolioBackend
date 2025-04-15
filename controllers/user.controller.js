const userModels = require("../models/user.models")

class UserController {
      async getAll () {
        try {
            const allUsers = await userModels.find()
            res.status(200).json(allUsers)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
      }
}

module.exports = new UserController()