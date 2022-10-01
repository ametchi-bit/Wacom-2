const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express()
const port = 3000 || process.env.PORT

// Configurations
app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/registration', (req, res) => {
    res.render('registration')
})

// Port opening
app.listen(port, function() {
    console.log("Server is running at port " + port)
})