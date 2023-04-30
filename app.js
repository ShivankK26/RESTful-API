const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');



const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});


const articleSchema = mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);



//Requests Targetting all the articles//



app.route("/articles")


.get((req,res) =>{
    Article.find()
        .then((foundArticles) => {
            res.send(foundArticles);
        })
        .catch((err) => {
            console.log(err);
        });
})

.post((req,res)=>{
    console.log(req.res.title); 
    console.log(req.res.content); 

    const Article = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if(!err){
            res.send("Successful!");
        } else {
            res.send(err);
        }
    });
})

.delete((req,res)=>{
    Article.deleteMany({})
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error(err);
  });
});



//Requests Targetting a specific article//

app.route("/articles/:articleTitle")

.get((req,res) =>{
    Article.findOne({title: req.params.articleTitle}) //we wrote foundArticle because we're using findOne , i.e only noe article we're finding out of many.
        .then((foundArticle) => {
            res.send(foundArticle);
            })
        .catch((error) => {
            console.error(error);
    });
})


app.put("/articles/:articleTitle", function (req, res) {
    const articleTitle = req.params.articleTitle;
    const newTitle = req.body.title;
    const newContent = req.body.content;
  
    // Find the article to update and call the update method on it
    Article.findOneAndUpdate(
      { title: articleTitle },
      { title: newTitle, content: newContent },
      function (err, foundArticle) {
        if (!err) {
          res.send("Successfully updated article.");
        } else {
          res.send(err);
        }
      }
    );
})


.patch((req,res)=>{

Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function (err, foundArticle) {
        if (!err) {
          res.send("Successfully updated article.");
        } else {
          res.send(err);
        }
      }
    )    
})


.delete((req,res)=>{
    Article.deleteOne(
        {title: req.params.articleTitle},
        function (err) {
            if (!err) {
              res.send("Successfully deleted the article.");
            } else {
              res.send(err);
            }
          }
    );
});



port = process.env.PORT || 3000;

app.listen(port, (req,res) =>{
    console.log(`Server has started at ${port}`);
});