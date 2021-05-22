const config = require('./config')

const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const connectdb = require('./server/dbconnection/connection')

const app = express()

const PORT = config.port || 8080

//log request
app.use(morgan('dev'))

// mongodb connection
connectdb()

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

// app.get('/', (req, res) => {
//     res.send('Api started...')
// })

//load router
app.use('/', require('./server/routes/treetypes-router'))

app.listen(config.port, () => {
    console.log(`App is listening on url http://${config.host}:${config.port}`)
})