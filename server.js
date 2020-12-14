let express = require ('express')

let bodyParser = require('body-parser')
let path = require('path')

let api_routes = require ('./routes/recordapi.js')

let app = express()

app.use(express.static(path.join(__dirname, 'Activity-Tracker-client', 'dist')))

app.use(bodyParser.json())

app.use('/api',api_routes)

app.use(function(req, res, next){
    res.status(404).send('Not found')
})


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})


let server = app.listen(process.env.PORT || 4000, function(){
    console.log('Express server running on port', server.address().port )
})