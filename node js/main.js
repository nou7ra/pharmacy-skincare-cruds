const express = require("express")
const app = express()
app.use(express.json());
const mongoose= require("mongoose")
const Article = require("./models/article")


mongoose.connect("mongodb+srv://nourhan:nouramo530@cluster0.3qbgdxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected successfully")
}).catch(()=>{
    console.log("error with cconnecting with the DB")
})

//mongodb+srv://nourhan:<db_password>@cluster0.3qbgdxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.get("/hello" , (req , res)=>{
    res.send("hello");
});
app.get("/hi" , (req , res)=>{
    res.send("hiii");
});
app.get("/test" , (req , res)=>{
    //res.sendFile(__dirname + "/views/index.html")
    res.render("index.ejs",{
        "name":"test"
    })
});

app.post("/sayhello",(req,res) =>{
    //console.log(req.query);
    //res.send(`hello ${req.body.name} , age is ${req.query.age}`);
    res.json({
        "age":req.query.age,
        "name":req .query.name
    })

});
app.post("/articles",async(req,res)=>{
    const newArticle = new Article()
    const arTitle = req.body.articleTitle
    const arBody = req.body.articleBody
    newArticle.title=arTitle
    newArticle.body=arBody
    newArticle.numberoflike=0
    await newArticle.save()
    res.json(newArticle)
    
})
app.get("/articles",async (req,res)=>{
    const articles = await Article.find()
    res.json(articles)
})
app.get("/articles/:articleId",async(req,res)=>{
    const id = req.params.articleId
    const article =  await Article.findById(id)
    res.json(article)
})
app.delete("/articles/:articleId",async(req,res)=>{
    const id = req.params.articleId
    const article =  await Article.findByIdAndDelete(id)
    res.json(article)
})
app.get("/showArticles",async(req,res)=>{
    const articles= await Article.find()
    res.render("articles.ejs",{
        allArticles: articles,
    })
})

app.listen(3000, ()=>{
    console.log("iam listening in port 3000")
})