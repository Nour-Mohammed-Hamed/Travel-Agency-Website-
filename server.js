const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const users=[]
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.html');
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.html');
})

app.post('register',async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')

    }catch{
         res.redirect('/register')
    }
    console.log(users)
    req.body.email

})
app.listen(3000)