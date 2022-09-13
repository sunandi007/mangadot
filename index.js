const express = require('express')
const userRouter = require('./router/users')
const mangaRouter = require('./router/manga')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var myLogger = (req, res, next) => {
    req.time = new Date()
    next()
}

const mongoose = require('mongoose');
main().catch(err => console.log('connection error: ' + err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/comics');
    console.log('successful connection')
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// const { Schema } = mongoose;
// const comicSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     subTitle:  String,
//     description:  String,
//     subject:  String,
//     image:  String,
//     type:  String,
//     category:  [String],
//     author: String,
//     totalReader: String,
//     howToRead: String,
// });
//
// const Comic = mongoose.model('Comic', comicSchema);

// cara pertama
// const modelSchema = new Comic({
//     title: 'one piece',
//     subTitle: 'op',
//     description: 'Raja Bajak Laut mengkonfirmasi keberadaan harta terbesar yang disebut One Piece.',
//     subject: 'OP',
//     image: 'https://thumbnail.komiku.id/wp-content/uploads/2019/02/Komik-One-Piece.jpg?w=225&quality=60',
//     category: ["comedy", "drama", "actionhero", "series", "adventure"],
//     author: 'Eiichiro Oda',
//     totalReader: '222433',
//     howToRead: 'Kanan ke Kiri',
// })
//
// modelSchema.save((err, data) => {
//     if (err) console.error(err);
//     console.log(data);
//     console.log('Successfully saved data');
// })

//care keDua
// const entities = new Comic()
// entities.title = 'one piece'
// entities.subTitle = 'op'
// entities.description = 'Raja Bajak Laut mengkonfirmasi keberadaan harta terbesar yang disebut One Piece.'
// entities.subject = 'OP'
// entities.image = 'https://thumbnail.komiku.id/wp-content/uploads/2019/02/Komik-One-Piece.jpg?w=225&quality=60'
// entities.category = ["comedy", "drama", "actionhero", "series", "adventure"]
// entities.author = 'Eiichiro Oda'
// entities.totalReader = '2432444'
// entities.howToRead = 'Kanan ke Kiri'
//
// entities.save((err, data) => {
//     if (err) console.error(err);
//     console.log(data);
//     console.log('Successfully saved data');
// })

// cara create keTiga
// Comic.create({
//     title: 'one piece',
//     subTitle: 'op',
//     description: 'Raja Bajak Laut mengkonfirmasi keberadaan harta terbesar yang disebut One Piece.',
//     subject: 'OP',
//     image: 'https://thumbnail.komiku.id/wp-content/uploads/2019/02/Komik-One-Piece.jpg?w=225&quality=60',
//     category: ["comedy", "drama", "actionhero", "series", "adventure"],
//     author: 'Eiichiro Oda',
//     totalReader: '222433',
//     howToRead: 'Kanan ke Kiri',
// }, (err, data) => {
//     if (err) console.error(err);
//     console.log(data);
//     console.log('Successfully Create data');
// })

app.use(myLogger)

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'about', message: 'Hello about!' })
})

app.use(mangaRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


