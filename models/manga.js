const mongoose = require('mongoose')
const { Schema } = mongoose;

const mangaList = new Schema({
    title: String,
    main_image: String,
    rating: Number,
    subTitle: String,
    description: String,
    subject: String,
    image: String,
    type: String,
    category: [String],
    author: String,
    totalReader: String,
    howToRead: String,
    slug: String,
})

const Manga = mongoose.model('MangaList', mangaList);

module.exports = Manga;
