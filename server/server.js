const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const cafeRouter = require('/cafe-routes.js')
const fastFoodRouter = require('/fast-food-routes.js')
const italianRouter = require('/italianRouter')
const asianRouter = require('/asian-routes.js')
const indianRouter = require('/indian-routes.js')
const veganRouter = require('/vegan-routes.js')


// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Your routes/router(s) should go here

server.get('/', (req, res) => {
  res.render('home')
})
server.use('/cafe', cafeRouter)
server.use('/fast-food', fastFoodRouter)
server.use('/italian', italianRouter)
server.use('/asian', asianRouter)
server.use('/indian', indianRouter)
server.use('/vegan', veganRouter)

module.exports = server
