let express  = require ('express')
let db = require('../models')
let Sequelize = require('sequelize')
const { sequelize } = require('../models')

let Record  = db.Record

let router = express.Router()

router.get('/records', function(req, res, next){
    Record.findAll( { order: ['id']} ).then(records => {
        return res.json(records)
    })
    .catch( err => next (err))

})


router.post('/records' ,function (req, res, next){
    let requestData = req.body

    Record.create(requestData).then( (data) => {
        return res.status(201).send('ok')
    }).catch (err => {
        console.log(err)
        if(err instanceof Sequelize.ValidationError) {
           let messages = err.errors.map( (e) => e.message)
            
            console.log(messages)
           return res.status(400).json(messages)
        }

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
