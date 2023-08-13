const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') );

app.get('/', function(req, res){
    // console.log(req);
    // console.log(__dirname);
    // res.send('<h1>Cool, it is running</h1>');

    return res.render('home', {title: "Welcome Title"});``
})

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "EJS playground"
    });
})


app.listen(port, function(err){
    if(err){
        console.log("error in running server", err);
    }
    console.log("Yup ,express server is running on port:", port);
})