let express = require('express')
let app = express()
let path = require('path')
let port = 4000
let fs=require('fs')

//EXPRESS SPECIFIC STUFF
app.use('./static', express.static('static'))// for serving static files

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory

//ENDOINTS
app.get('/', (req, res) => {
    let con = "this is the best content on the intenet so far so ue it wisely"
    let params = { 'title': 'pubg is the best game', 'content': con }
    res.render('index.pug', params)
})

//jo v hm post request maar rhe hai, usme jo v data jo form me submit ho rha hai, wo hmko pane k liye ek middleware banana pdega..ye help krta hai, form k data express tk me lane k liye....jaise jaise syntax likha hua hai, chup-chap waise waise likh do iska syntax
app.use(express.urlencoded())

app.post('/', (req, res) => {
    // console.log(req.body)//the form data is printed in the console as an object 
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputtowrite=`the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputtowrite)//first parameter is the location and then second one is the data to be inputted
    let params = {'message': 'your form has been submitted successfully'}
    res.render('index.pug', params)
})

app.listen(port, () => {
    console.log("its running successfully on port")
})