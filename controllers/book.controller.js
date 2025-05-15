const bookService = require("../services/book.service")

class BookController {
      async getAll (req, res) {
        try {
            const allBooks = await bookService.getBooks()
            res.status(200).json(allBooks)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
      };

      async getOne (req, res) {
        try {
          const { id } = req.body
          const oneBook = await bookService.getOneBook(id)
          res.status(200).json(oneBook)
        } catch (error) {
          res.status(500).json(error)
          
        }
      }

      async addToMyBooks (req, res) {
        try {
          const { userId, bookId} = req.body
          const newBook = await bookService.addToMyBooks( userId, bookId)
          res.status(200).json(newBook)
        } catch (error) {
          res.status(500).json(error)
          
        }
      }

      async getSearchedBooks(req, res) {
          try {
        const { title } = req.query; 

        if (!title) {
            return res.status(400).json({ message: "Title is required for search" });
        }

        const searchedBooks = await bookService.getSearchedBook(title);
        res.status(200).json(searchedBooks);

          } catch (error) {
             res.status(500).json({ message: "Something went wrong", error });
          }
}

}

module.exports = new BookController()