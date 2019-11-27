const express = require('express');
const app = new express();
const http = require('http');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 80;
mongoose.connect('mongodb+srv://jeframos:jeframos@cluster0-y8mcz.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const cors = require('cors');
app.use(cors());
    

const Admin = mongoose.model('admin',{
    name: String,
    username: String,
    id: Number,
    password: String
});

app.use(express.static(__dirname + '/dist/cinema'));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/dist/cinema/index.html');
    });


app.get('/admin', (req, res)=>{
    Admin.find({},(err, data) => {
     if(err) res.json({"msg":"Invalid Request"});
           res.json(data);
       });
    });
app.get('/admin/:username/:password', (req, res)=>{
    Admin.find({username:req.params.username,password:req.params.password},(err, data) => {
     if(err) res.json({"msg":"Invalid Request"});
           res.json(data);
       });
    });
app.post('/admin', urlEncoded, (req, res) => {
    var admin = new Admin({
        id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    admin.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/admin/:id', urlEncoded, (req, res) => {
    admin.updateOne({_id:req.params.id},{
        id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/admin/:id', (req, res) => {
    Admin.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});

const Movie = mongoose.model('movie',{
    title: String,
    director: String,
	dateShow: Date,
    trailer: String,
	image: String,
	description: String
	
});

app.get('/movie', (req, res) => {
    Movie.find({},(err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    })
});

app.get('/movie/:id', (req, res)=>{
	Movie.find({_id: req.params.id}, (err, data) => {
		if(err) throw err;
		res.json(data);
	});
});

app.post('/movie', urlEncoded, (req, res) => {
    var movie = new Movie({
        title: req.body.title,
        director: req.body.director,
		dateShow: req.body.dateShow,
		trailer: req.body.trailer,
		image: req.body.image,
		description: req.body.description
    });
    movie.save((err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/movie/:id', urlEncoded, (req, res) => {
    Movie.updateOne({_id:req.params.id},{
        title: req.body.title,
        director: req.body.director,
		dateShow: req.body.dateShow,
		trailer: req.body.trailer,
		image: req.body.image,
		description: req.body.description
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
         res.json(data);
        });
});

app.delete('/movie/:id', (req, res) => {
    Movie.deleteOne({_id:req.params.id},(err,data) => {
        if(err) res.json({msg:'Invalid Request'});
            res.json(data);
    })
});

const server = http.createServer(app)
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
    });