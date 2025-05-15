const userModel = require("../models/user.model");
const bookModel = require("../models/user.model");
const fileService = require("./file.service");


class BookService {
    async getBooks () {
        const book = await bookModel.find()
        return book
    } ;

    async getOneBook (id) {
         const book = await bookModel.findById(id)
         return book
    };

    async getSearchedBook(title) {
    const books = await bookModel.find({
        title: { $regex: title, $options: 'i' }
    });
    return books;
    }

    async addToMyBooks(userId, bookId) {
    const updatedUser = await userModel.findOneAndUpdate(
        { userId },
        { $addToSet: { myBooks: bookId } },
        { new: true }
    );

    return updatedUser.myBooks;
}


}

module.exports = new BookService()