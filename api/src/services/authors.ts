import Author, { AuthorDocument } from '../models/authors'
import { NotFoundError } from '../../helpers/apiError'
// import { findById } from '../controllers/authors'

const create = async (author: AuthorDocument): Promise<AuthorDocument> => {
  return author.save()
}

const findById = async (authorId: string): Promise<AuthorDocument> => {
  const foundAuthor = await Author.findById(authorId)

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

const findAll = async (): Promise<AuthorDocument[]> => {
  return Author.find().sort({ firstName: 1})
}

const update = async (
  authorId: string,
  update: Partial<AuthorDocument>
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(authorId, update, {
    new: true,
  })

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${findById} not found`)
  }

  return foundAuthor
}

const deleteAuthor = async (findById: string): Promise<AuthorDocument | null> => {
  const foundAuthor = Author.findByIdAndDelete(findById)

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${findById} not found`)
  }

  return foundAuthor
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteAuthor,
}
