import User, { UserDocument } from '../models/Users'
import { NotFoundError } from '../../helpers/apiError'

const create = async (author: UserDocument): Promise<UserDocument> => {
  return User.save()
}

const findById = async (UserId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(UserId)

  if (!foundUser) {
    throw new NotFoundError(`User ${UserId} not found`)
  }

  return foundUser
}

const findAll = async (): Promise<UserDocument[]> => {
  return User.find().sort({ firstName: 1})
}

const update = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const deleteUser = async (UserId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(UserId)

  if (!foundUser) {
    throw new NotFoundError(`User ${UserId} not found`)
  }

  return foundUser
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
}