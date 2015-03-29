express = require 'express'
app     = express()
fs      = require 'fs'

app.use (req, res, next) ->
  userWantsToOpenFile = req.originalUrl isnt '/' and req.originalUrl isnt '/make-offer-request'
  fileNotExists       = not fs.existsSync "./mock_data#{req.originalUrl}.json"
  redirectToHomePage  = -> res.redirect 301, '/'

  if userWantsToOpenFile and fileNotExists
    redirectToHomePage()
  else
    next()

app.use (req, res, next) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
  next()

###********************************************************
#
# Express routes for:
#   - index.html
#
#   Sample endpoints to demo async data fetching:
#     - GET /ingredients
#     - GET /categories
#     - GET /deliveries
#     - GET /offer_requests
#
#**********************************************************
###

app.get /.+/, (req, res) ->
  filePath   = "./mock_data#{req.originalUrl}.json"
  fileExists = fs.existsSync filePath

  respondWithJSON = ->
    jsonDummyResponse = require filePath
    res.json jsonDummyResponse

  respondWithIndexHTML = ->
    indexHtmlFile =  "#{__dirname}/build/index.html"
    res.sendFile indexHtmlFile

  fileExists and respondWithJSON() or respondWithIndexHTML()

server = app.listen process.env.PORT || 5000, ->
  console.log 'Essential React listening at http://localhost:%s/', server.address().port
