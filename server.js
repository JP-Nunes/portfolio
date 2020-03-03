const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static("public")),
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const dataAbout = {
        avatar_src: "/images/portfolio-image.jfif",
        name: "João Pedro Nunes",
        role: "Desenvolvedor JavaScript",
        description: "Programador focado em aprendizado e melhoria contínua, aluno da <a href='https://rocketseat.com.br' target='_blank'>Rocketseat</a>",
        links: [
            { name: "Github", url: "https://github.com/JP-Nunes"},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/jo%C3%A3o-p-nunes-java-e-javascriptdev/"}
        ]
    }
    return res.render("about", { about: dataAbout })
})

server.get('/portfolio', function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id;
    
    const video = videos.find(function(video) {
        return video.id == id
    })
        if(!video) {
            return res.send("Video not found!")
        }
    
        return res.render("video", { item: video })    
})
server.listen(5000, function() {
    console.log("server is running")
})