import express from 'express';
import bodyParser from "body-parser";
import multer from 'multer';
import ejs from 'ejs';


const port = 3000;
const app = express();
const upload = multer();
app.set('view engine','ejs');
app.set('views','./views')
app.use(bodyParser.json());
app.use(express.json());

app.get('/login',(req,res)=>{
    res.render('login')
});
let user = {
    username: 'huydothe1999@gmail.com',
    password: '110699'
}

app.post('/login', upload.none(),(req, res,next)=> {
    console.log(req.body)

    if (req.body.username === user.username && req.body.password === user.password) next('route')
    else next()
},(req, res, next)=>{
    res.render('denied')
})

app.post('/login',(req, res, next)=>{
    res.render('success', {data:user})
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})