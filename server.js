const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


app.get('/', async (req,res)=>{
    const articles = await Article.find().sort({createdAt : 'desc'})
    res.render('articles/index', { articles : articles})
})

app.use('/articles', articleRouter)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server started')
})