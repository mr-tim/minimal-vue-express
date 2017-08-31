const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/api', function (req, res) {
  res.json({'message': 'hello world!'})
})

app.listen(port, () => console.log('Now listening on port ' + port + '...'))