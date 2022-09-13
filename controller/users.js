const User = require('../models/user')

module.exports = {
    index: (req, res) => {
        User.find((err, users) => {
            if (err) console.error(err)
            if (users.length > 0) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Get Data Users',
                    data: users
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No users found'
                })
            }
        })
    },

    findByEmail: (req, res) => {
        User.findOne({email: req.body.email},(err, users) => {
            if (err) console.error(err)
            if (users.length > 0) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Get Data Users',
                    data: users
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No users found'
                })
            }
        })
    },

    findById: (req, res) => {
        const id = req.params.id
        User.findById(id, (err, users) => {
            if (err) console.error(err)
            console.log(users)
            if (users) {
                res.json({
                    successCode: 'SUC-0001',
                    message: 'Successfully Get One Data Users',
                    data: users
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No users found'
                })
            }
        })
    },

    findByQuery: (req, res) => {
        let keyword = {}
        if (req.query.keyword) {
            keyword = {name: {$regex: req.query.keyword}}
        }

        const query = User.find(keyword)
        query.select('user email _id')
        query.exec((err, users) => {
            if (err) console.error(err)
            if (users) {
                console.log(users)
                res.json({
                    successCode: 'SUC-0004',
                    message: 'Successfully Find Data Users',
                    data: users
                })
            } else {
                res.json({
                    error_code: 'ERR-0001',
                    message: 'No users found'
                })
            }
        })
    },

    create: (req, res) => {
        // cara satu
        // const user = new User({
        //      name: req.body.name,
        //      email: req.body.email,
        //      password: req.body.password,
        //  })
        //  user.save((err, result) => {
        //      if (err) console.log(err)
        //      res.send({
        //          successCode: 'SUC-0002',
        //          message: 'Successfully Create Data Users',
        //      })
        //  });

        // cara kedua
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }, (err, result) => {
            if (err) console.log(err)
            res.send({
                successCode: 'SUC-0002',
                message: 'Successfully Create Data Users',
                data: result
            })
        })
    },

    update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if (user.id === id) {
                user.id = id
                user.name = req.body.name
                user.email = req.body.email
                return user
            }
        })
        res.send({
            successCode: 'SUC-0003',
            message: 'Successfully Update Data Users',
            data: users
        })
    },

    delete: (req, res) => {
        // const id = req.params.id
        // users = users.filter(user => user.id !== id)
        // res.send({
        //     successCode: 'SUC-0004',
        //     message: 'Successfully Delete Data Users',
        //     data: users
        // })
    }
}
