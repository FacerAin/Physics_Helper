const express = require('express')
const router = express.Router()

app.get('/auth')
app.get('/list')
app.use('/helper',require('./helper'))

module.exports=router