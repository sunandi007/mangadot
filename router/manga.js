const express = require('express');
const router = express.Router();

mangaController = require('../controller/manga');

router.route('/manga')
    .get(mangaController.mangaList)
    .post(mangaController.create)

router.get('/manga/:slug', mangaController.findBySlug)
router.post('/detail', mangaController.createDetails)

router.get('/chapters/:chapter', mangaController.findByIdChapters)
router.route('/chapters')
    .get(mangaController.chapterList)
    .post(mangaController.createNewChapter)

module.exports = router;
