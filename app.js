require('dotenv').config()
const express = require('express')
const http = require('http');
const app = express()

app.get('/', async (req, res) => {
    res.send({ status: 'success' })
})



http.createServer(app).listen(process.env.PORT || 8000)