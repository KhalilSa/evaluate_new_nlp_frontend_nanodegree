const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Server } = require('http')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))
console.log(path.join(__dirname))

app.get('/', function(req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8081 || process.env.port
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})