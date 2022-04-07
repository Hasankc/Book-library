import mongoose, { Schema, Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  password: string
  isAdmin: boolean
  bookBorrowed: {
    bookId: string
    dayBorrow: Date
    dayReturn: Date
  }[]
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    index: true,
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    passowrd: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  bookBorrowed: [
    {
      bookId: { type: mongoose.Types.ObjectId, ref: 'Book' },
    },
    ,
  ],
})

export default mongoose.model<UserDocument>('User', userSchema)
