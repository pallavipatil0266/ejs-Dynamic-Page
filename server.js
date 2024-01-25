import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.post('/form', function (req, res){
var x = req.body.fname
var y = req.body.lname
var z = req.body.contact
var p = req.body.age
var q = req.body.email
var r = req.body.password
console.log(x, y, z, p, q, r)
res.render("form.ejs", { "fname":x, "lname":y, "contact":z, "age":p, "email":q, "password":r});

});

app.get('/form', function (req, res) {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, "views/form.html"))

});

app.get('/form', (req, res) => {
        // console.log(__dirname)
     
});

app.listen(8000, function (res, req) {
        console.log("server start")
})