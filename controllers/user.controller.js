const userModels = require("../models/user.model")
const userService = require("../services/user.service")

class UserController {
      async getAll (req, res) {
        try {
            const allUsers = await userService.getUsers()
            res.status(200).json(allUsers)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
      };

      async getOne (req, res) {
        try {
          const { id } = req.body
          const oneUser = await userService.getOneUser(id)
          res.status(200).json(oneUser)
        } catch (error) {
          res.status(500).json(error)
          
        }
      }

      async updateRating (req, res) {
        try {
          const { id, rating } = req.body
          const updatedUser = await userService.updatedRating(email, rating)
          res.status(200).json(updatedUser)
        } catch (error) {
          res.status(500).json(error)
          
        }
      }


}

module.exports = new UserController()