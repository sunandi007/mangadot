const Manga = require('../models/manga')
// const DetailManga = require('../models/detailManga')
const ChapterList = require('../models/chapter')
const slugify = require('slugify')
const User = require("../models/user");


module.exports = {
    mangaList: (req, res) => {
        Manga.find({}, 'slug main_image title description rating',(err, manga) => {
            if (err) console.error(err)
            if (manga.length > 0) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Get All Data Manga',
                    data: manga
                })
                } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No Manga found'
                })
            }
        })
    },

    chapterList: (req, res) => {
        ChapterList.find((err, chapter) => {
            if (err) console.error(err)
            if (chapter.length > 0) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Get All Data Chapter Manga',
                    data: chapter
                })
                } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No Manga found'
                })
            }
        })
    },

    findBySlug: (req, res) => {
        Manga.findOne({slug: req.params.slug},(err, manga) => {
            if (err) console.error(err)
            if (manga) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Get Data Users',
                    data: manga
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No Detail Manga found'
                })
            }
        })
    },

    updateManga: (req, res) => {
        const id = req.params.id
        Manga.findByIdAndUpdate(id, req.body, {options: {new: true}}, (err, manga) => {
            if (err) console.error(err)
            if (manga) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Update Manga',
                    data: manga
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No Detail Manga found'
                })
            }
        })
    },

    updateChapter: (req, res) => {
        const id = req.params.id
        ChapterList.findByIdAndUpdate(id, req.body, {options: {new: true}}, (err, manga) => {
            if (err) console.error(err)
            if (manga) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Update Chapter Data Manga',
                    data: manga
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No Detail Manga found'
                })
            }
        })
    },

    findByIdChapters: (req, res) => {
        ChapterList.findById(req.params.chapter).exec((err, chapter) => {
            if (err) console.error(err)
            if (chapter) {
                res.send({
                    successCode: 'SUC-0001',
                    message: 'Successfully get Capter List Manga',
                    data: chapter
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No Chapter List Manga found'
                })
            }
        })
    },

    create: (req, res) => {
        const slugifyResult = slugify(req.body.title)
        Manga.create({
            title: req.body.title,
            rating: req.body.rating,
            slug: slugifyResult,
            main_image: req.body.main_image,
            subTitle: req.body.subTitle,
            description: req.body.description,
            subject: req.body.subject,
            image: req.body.image,
            type: req.body.type,
            category: req.body.category,
            author: req.body.author,
            totalReader: req.body.totalReader,
            howToRead: req.body.howToRead,
        }, (err, manga) => {
            if (err) console.error(err)
            res.send({
                successCode: 'SUC-0001',
                message: 'Successfully Created Manga',
                data: manga
            })
        })
    },

    createNewChapter: (req, res) => {
        ChapterList.create({
            chapter: req.body.chapter,
            slides: req.body.slides,
        }, (err, manga) => {
            if (err) console.error(err)
            console.log(manga)
            res.send({
                successCode: 'SUC-0001',
                message: 'Successfully Created New Chapter Manga',
                data: manga
            })
        })
    },

    // createDetails: (req, res) => {
    //     const slugifyResult = slugify(req.body.title)
    //     DetailManga.create({
    //         title: req.body.title,
    //         subTitle: req.body.subTitle,
    //         description: req.body.description,
    //         subject: req.body.subject,
    //         image: req.body.image,
    //         type: req.body.type,
    //         category: [req.body.category],
    //         author: req.body.author,
    //         totalReader: req.body.totalReader,
    //         howToRead: req.body.howToRead,
    //         slug: slugifyResult
    //     }, (err, manga) => {
    //         if (err) console.error(err)
    //         res.send({
    //             successCode: 'SUC-0001',
    //             message: 'Successfully Created Manga',
    //             data: manga
    //         })
    //     })
    // }
}
