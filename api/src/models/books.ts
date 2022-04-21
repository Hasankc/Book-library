import mongoose, { Schema, Document } from 'mongoose'

export type BookDocument = Document &{
    _id: string
    title: string
    bookImg: string
    publishedYear: number
    quantuty: number
    genre: string
    book: string
    authors: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
    
}

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true,

    },
    book: {
        type: String,
        required: true
    },
    bookImg: {
        type: String,
        required: true,

    },
    publishedYear: {
        type: Number,
        required: true,
        min: 1900,

    },
    genre: {
        type: String,
    required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0.
        
    },
    pageNum: {
            type: Number,
            min: 1,

    },
    author: {
        
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'Author',
    
}
  
})
export default mongoose.model<BookDocument>('Book', bookSchema)