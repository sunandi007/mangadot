const mongoose = require('mongoose')
const { Schema } = mongoose;

const mangaList = new Schema({
    title: String,
    image: String,
    rating: Number,
    slug: String,
})

const Manga = mongoose.model('MangaList', mangaList);

module.exports = Manga;
