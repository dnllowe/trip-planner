'use strict'

const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const session = require('express-session')
const pg = require('pg')
const pgSession = require('connect-pg-simple')(session)

const db = require('./db')
const router = require('./routes')
const User = require('./db/User')

const PORT = 3000

// Session middleware
app.use(session({
  store: new pgSession({
    pg,
    conString: process.env.DATABASE_URL || 'postgres://localhost/trip-planner',
    tableName: 'session'
  }),
  resave: true,
  saveUninitialized: true,
  secret: 'orbital',
}))

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