const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));        
app.engine('hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
}));
app.set('view engine', 'hbs'); 
app.use(express.static('static'));
app.use(express.static('static/cwiczenia'));


app.get('/', (req, res) => {
    fs.readdir(`${__dirname}/static/cwiczenia`, (err, files) => {
        if (err) {
            return console.error(err);
        }
        console.log(files);
        res.render('index.hbs', {files: files});
    });
});


app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT );
});