const mongoose = require('mongoose')
const { Schema } = mongoose;

const detailMangaEntity = new Schema({
    title: String,
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

const DetailManga = mongoose.model('DetailManga', detailMangaEntity)

module.exports = DetailManga;
