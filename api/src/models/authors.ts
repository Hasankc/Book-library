/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, {Schema, Document } from 'mongoose'

export type AuthorDocument = Document & {
  __id: String
  firstName: string
  lastName: string
  email: string
  bookId: string[]
  
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
