const express = require('express')

const userRouter = require('./user')

const app = express()
app.use('/user', userRouter)

app.listen(9000, () => {
  console.log('Server start at port 9000');
})