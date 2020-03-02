const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'html')

nunjucks.configure('views', {
    express:server
})

server.get('/', function(req, res) {
    return res.render('about.html')
})
server.get('/portfolio', function(req, res) {
    return res.render('portfolio.html')
})

server.listen(5000, function() {
    console.log('server is running')
})