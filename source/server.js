var express = require('express');
var app = express();
app.use(express.static(__dirname +"/public"));
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://55.55.55.5/mongo');

var mongojs= require('mongojs');
var db =mongojs('contactlist',['contactlist']);

var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data



io.sockets.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send msg',function(data){
    console.log('send msg socket on called',data);

    io.sockets.emit('get msg',data);
  })
  
});

 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.get('/contactList',function(req, res){
  console.log("servive call made");

 db.contactlist.find(function(err, users) {
  if( err || !users) 
    console.log("No data user found");
  else 
  {
    res.json(users);
    console.log("Data>>>",users)
  }
    
});
});
    


app.post('/contactList',function(req,res){
        console.log("req.body"+JSON.stringify(req.body));
        db.contactlist.insert(req.body,function(err,doc){
        res.json(doc);
        });

});
    
// app.delete('/contactList/:id',function(req,res){
//     console.log("called")
//     var id=req.params.id;
//     console.log("id to be deleted"+id);
//     db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,doc){
//     res.json(doc);
//     });
    
// });
    
// app.get('/contactList/:id',function(req,res){
//     var id=req.params.id;
//      db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
//     res.json(doc);
//         });

// });


// app.put('/contactList/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(req.body.name);
//   db.contactlist.findAndModify({
//     query: {_id: mongojs.ObjectId(id)},
//     update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
//     new: true}, function (err, doc) {
//       res.json(doc);
//     }
//   );
// });
 
    
server.listen(3000);
console.log("Server is running on port 3000");
