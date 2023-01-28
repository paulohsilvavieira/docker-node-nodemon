const express = require('express')

const app = express()

app.listen(3000, () => {
  console.log('Server Started')
})

app.get('/', (req, res) => {
  return res.status(200).json({
    msg: 'OK'
  })
})