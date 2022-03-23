import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
    _id: String
    firstName: String
    lastName: String
    createdAt: Date
    dob : Date
    email: String
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
  },
  lastName: {
    type: String,
    index: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,    
  },
  dob: {
      type: Date,
      required: true,
  },
  email: {
      type: String,
      unique: true,
  },

})

export default mongoose.model<UserDocument>('user', userSchema)
