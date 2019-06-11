const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const keys = require('./keys');
const User = require('./models/User');

//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true}).then(()=> console.log("Mongo DB Connected"));

app.use(bodyParser.json());
//by default its usuing root ROUTE, which is "/"
app.use('/', express.static("public"));  

app.get('/', function(req, res) {
 res.send('Hello Marcus!')
})


//########################################################################################## -- post data to mongoDB

app.post('/api', function(req, res){   //res.send sends info from server to browser (client)
    
    const userName = req.body.username;       //type /api?username="marcus"     //put queries, parameters here // send over JSON objects or files aswell (advanced)
     const price = req.body.price;
    const message = req.body.message;
    const product = req.body.product;
    const artist = req.body.artist;
    const album = req.body.album;
    const genre = req.body.genre;

    const data = {
        username: userName,
        price: price,
        message: message,
        product,
        artist,
        album,
        genre
    }
    console.log("data", data);

    const user = new User(data)
    user.save()      //saves data
    .then(()=> res.send(data)) //reply to browser to say data is saved
    .catch (err => console.log(err)) //if error console log error
   
})

//######################################################### -- show all users

app.get("/getallusers", function(req, res){
User.find()
.then(results  => {  
    console.log(results)    //result = response just like in a promise
    
    res.send(results)
})
})

//########################################################## -- search by username

app.get("/showprofile/:username", function(req, res){    //:username is a parameter and a variable
   const user = req.params.username    //get username from paramater, inside the URL, store in const 'user'
    console.log(user)

    User.find({username:user}) //username is the key value is user
        .then(result => {
            console.log("Showing", user, "profile:", result)
            res.send(result)
        }).catch(err => {
            console.log(err)
        })

})

//############################################################ -- search by artist

app.get("/showartist/:artist", function(req, res){    //:username is a parameter and a variable
   const artistName = req.params.artist   //get album from paramater, inside the URL, store in const 'user'
    console.log(artistName)

    User.find({artist:artistName}) //username is the key value is user
        .then(result => {
            console.log("Showing", artistName, "profile:", result, artistName)
            res.send(result)
        }).catch(err => {
            console.log(err)
        })

})

//################################################################### -- search DB by album

app.get("/showalbum/:album", function(req, res){    //:username is a parameter and a variable
   const albumName = req.params.album   //get album from paramater, inside the URL, store in const 'user'
    console.log(albumName)

    User.find({album:albumName}) //username is the key value is user
        .then(result => {
            console.log("Showing", albumName, "profile:", result, albumName)
            res.send(result)
        }).catch(err => {
            console.log(err)
        })

})

//#################################################################### -- search DB by product

app.get("/showproduct/:product", function(req, res){    //:username is a parameter and a variable
   const productName = req.params.product   //get album from paramater, inside the URL, store in const 'user'
    console.log(productName)

    User.find({product:productName}) //username is the key value is user
        .then(result => {
            console.log("Showing", productName, "profile:", result, productName)
            res.send(result)
        }).catch(err => {
            console.log(err)
        })

})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))