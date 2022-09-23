const express = require('express')
const homeRouter = require('../routes/health')
const usersRouter = require('../routes/api/users')
const authRouter = require('../routes/api/auth')
const listingsRouter = require('../routes/api/Listings')
const error = require('../middleware/error')
const logger = require('./logger')

module.exports = function (app) {
	// Express core middleware
	app.use(express.json())

	// custom middlware

	app.use('/', homeRouter)
	app.use('/api/users', usersRouter)
	app.use('/api/auth', authRouter)
	app.use('/api/rentals', listingsRouter)

	// error handling middleware
	app.use(error(logger))
}
