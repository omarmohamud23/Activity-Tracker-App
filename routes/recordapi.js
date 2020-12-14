let express  = require ('express')
let db = require('../models')
let Sequelize = require('sequelize')
const { sequelize } = require('../models')

let Record  = db.Record

let router = express.Router()

router.get('/records', function(req, res, next){
    Record.findAll().then(records => {
        return res.json(records)
    })
    .catch( err => next (err))

})


router.post('/records', function(req, res, next){
    Record.create( req.body ).then( data => {
        return res.status(201).send('ok')
    }).catch ( err => {
        console.log(err)
        // if ( err instanceof sequelize.ValidationError) {
        //     let messages = err.errors.map (e=>e.message)
        //     return res.status(500).json(messages)
        // }
        return next(err)
    })
})

router.patch('/records/:id', function(req, res, next) {

    Record.update(req.body, { where: { id: req.params.id } })
        .then( rowModified => {
            return res.send('ok')
        })

})

router.delete('/records/:id', function(req, res, next){
    Record.destroy({where: {id: req.params.id}})
        .then( rowModified => {
            return res.send('ok')
        })
})

module.exports = router 
