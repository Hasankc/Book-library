import Book, { BookDocument } from '../models/books'
import { NotFoundError } from '../helpers/apiError'

const create = async (author: BookDocument): Promise<BookDocument> => {
  return author.save()
}

const findById = async (BookId: string): Promise<BookDocument> => {
  const foundAuthor = await Book.findById(BookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const findAll = async (): Promise<BookDocument[]> => {
  return Book.find().sort({ title: 1})
}

const update = async (
  bookId: string,
  update: Partial<BookDocument>
): Promise<BookDocument | null> => {
  const foundBook = await Book.findByIdAndUpdate(bookId, update, {
    new: true,
  })

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const deleteBook = async (bookId: string): Promise<BookDocument | null> => {
  const foundBook = Book.findByIdAndDelete(bookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteBook,
}