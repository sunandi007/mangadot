const mongoose = require('mongoose')
const { Schema } = mongoose;

const chapters = new Schema({
    chapter: String,
    slides: [String],
},{timestamps: true})

const ChapterList = mongoose.model('Chapter', chapters)

module.exports = ChapterList;
