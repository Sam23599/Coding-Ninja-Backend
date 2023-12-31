const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') );
app.use(express.urlencoded());
app.use(express.static('assets'));

// middleware1
app.use(function(req, res, next){
    req.myName="Yummmmy";
    console.log('middleware 1 called');
    next();
});

// middleware2
app.use(function(req, res, next){
    console.log('middleware 2 called');
    console.log('My New Name,', req.myName);
    // console.log(contactList.top());
    next();
});




var contactList = [
    {
        name: "Ross",
        phone: "11111"
    },
    {
        name: "Joey",
        phone: "22222"
    },
    {
        name: "Chandler",
        phone: "33333"
    }
]

app.get('/', function(req, res){
    return res.render('home', {
        title: "Contact List",
        contact_list: contactList
    });
})

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "EJS playground"
    });
})

app.post('/create-contact', function(req, res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // })
    // return res.redirect('/');

    contactList.push(req.body);
    return res.redirect('back');
})

app.post('/delete-contact', function(req, res){
    contactList.pop();
    return res.redirect('back');
})

app.listen(port, function(err){
    if(err){
        console.log("error in running server", err);
    }
    console.log("Yup ,express server is running on port:", port);
})



