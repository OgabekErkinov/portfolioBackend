const userModel = require("../models/user.model");
const userModels = require("../models/user.model");
const fileService = require("./file.service");


class UserService {
    async createUser (user, picture) {
        const fileName = await fileService.save(picture)
        const newUser = await userModels.create({...user, picture: fileName})

        return newUser

    };
    async getUsers () {
        const user = await userModels.find()
        return user
    } ;

    async getOneUser (id) {
         const user = await userModels.findById(id)
         return user
    };

    async getRatedUsers () {
          const ratedUsers = await userModels.find().sort({rating : -1})
          return ratedUsers
    };

    async updateRating(email, rating) {
        const updatedUser = await userModel.findOneAndUpdate(
          { email },
          { rating },
          { new: true }
        );
      
        return updatedUser;
      }
}

module.exports = new UserService()