const express = require('express');
const router = express.Router();

mangaController = require('../controller/manga');

router.route('/manga')
    .get(mangaController.mangaList) // show some detail manga on homepage
    .post(mangaController.create) // create a new manga

router.get('/manga/:slug', mangaController.findBySlug) // get detail manga
router.patch('/manga/:id', mangaController.updateManga) // update detail manga

router.get('/chapters/:chapter', mangaController.findByIdChapters)
router.route('/chapters')
    .get(mangaController.chapterList)
    .post(mangaController.createNewChapter)
router.patch('/chapters/:id', mangaController.updateChapter) // update detail manga

module.exports = router;
