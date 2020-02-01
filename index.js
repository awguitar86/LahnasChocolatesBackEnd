const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');

const port = 8080

const app = express()

app.use(bodyParser.json())

mongoose
  .connect(
    'mongodb+srv://austinwright:StThomasCanada0810@cluster0-7vyyd.mongodb.net/lc-store?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(port, () => {
      console.log(`==============================\nServer is listening on port ${port}\n==============================`)
    })
  })
  .catch(err => console.log(err));