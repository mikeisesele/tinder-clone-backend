import mongoose from 'mongoose';

const cardsSchema = new mongoose.Schema({
    name: String,
    imgURL: String,
});


// this takes the model and returns the model as a mongoose model // more like a table
export default mongoose.model('cards', cardsSchema);