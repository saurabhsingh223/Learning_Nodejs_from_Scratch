const express = require('express')
const morgan = require('morgan')
const app = express()

app.set("view engine", 'ejs')
app.use(morgan('dev'))
app.use(express.static("public"))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.render('home')
})

app.get('/login', (req, res)=>{
    res.render('form')
})

app.post("/get-form-data", (req, res)=>{
    console.log(req.body)
    res.send("Completed")
}) 

app.listen(3000)
