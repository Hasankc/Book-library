/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, {Schema, ObjectId, Document } from 'mongoose'

export type AuthorDocument = Document & {
  firstName: string
  lastName: string
  email: string
  bookId: [Schema.Types.ObjectId]
}

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },
  bookId: [{
    type: mongoose.Types.ObjectId,
     ref: 'Book'
  }],
})

export default mongoose.model<AuthorDocument>('Author', AuthorSchema)
