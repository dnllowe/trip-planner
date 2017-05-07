'use strict'

const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const session = require('express-session')

const db = require('./db')
const router = require('./routes')
const User = require('./db/User')

const PORT = 3000

// Session middleware
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'orbital',

}))

app.use((req, res, next) => {
  if (!req.session.id) {
    User.create().
    then(user => req.session.id = user.id)
  }
})

// Logging middleware
app.use(volleyball)

// Body parsing for ajax requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Parse files in public folder as actual files, not routes
app.use(express.static(path.join(__dirname, '../public')))

// Node Modules
app.use('/bootstrap.min.css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.min.css')));
app.use('/bootstrap.min.css.map', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.css.map')));
app.use('/react.min.js', express.static(path.join(__dirname, '../node_modules/react/dist/react.min.js')));
app.use('/reactDom.min.js', express.static(path.join(__dirname, '../node_modules/react-dom/dist/react-dom.min.js')));

// API routes
app.use('/api', router)

// Sync database models
db.sync()
.then(() => {
// Start server
  app.listen(PORT, () => {
    console.log('Listening on port', PORT)
  })
})