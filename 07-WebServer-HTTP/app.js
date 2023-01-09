require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Juan',
        titulo: 'Curso de node  '
    })
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Juan',
        titulo: 'Curso de node  '
    })
})

app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre: 'Juan',
        titulo: 'Curso de node  '
    })
});


// app.get('/hola-mundo',  (req, res) => {
//     res.send('Hola mundo desde su endpoint')
// });

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listenig at http://localhost:${port}`)
});