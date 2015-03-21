express          = require 'express'
webpack          = require 'webpack'
WebpackDevServer = require 'webpack-dev-server'
config           = require './webpack.local.config'
fs               = require 'fs'
app              = express()

app.use (req, res, next) ->
  userWantsToOpenFile = req.originalUrl isnt '/'
  fileNotExists       = not fs.existsSync "./mock_data#{req.originalUrl}.json"
  redirectToHomePage  = -> res.redirect 301, '/'

  if userWantsToOpenFile and fileNotExists
    redirectToHomePage()
  else
    next()

###***********************************************************
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

###************************************************************
#
# Webpack Dev Server
#
# See: http://webpack.github.io/docs/webpack-dev-server.html
#
#***********************************************************
###

new WebpackDevServer webpack(config),
  publicPath:         config.output.publicPath
  hot:                true
  noInfo:             true
  historyApiFallback: true
.listen 9090, 'localhost', (err, result) ->
  console.log err if err

###*****************
#
# Express server
#
#***************
###

server = app.listen 8080, ->
  host = server.address().address
  port = server.address().port
  console.log 'Essential React listening at http://%s:%s', host, port
