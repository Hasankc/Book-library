import mongoose, {Schema, Document } from 'mongoose'

export type UserDocument = Document & {
    _id: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
    firstName: String
    lastName: String
    email: string
    password : string
    isAdmin: boolean
    ref: 'user'
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
      bookId: {type: mongoose.Types.ObjectId, ref: 'Book'},
    },
,  ]
   
})

export default mongoose.model<UserDocument>('user', userSchema)
