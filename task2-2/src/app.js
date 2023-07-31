

const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const x = path.join(__dirname, '../public'); 
app.use(express.static(x));
//hbs
app.set('view engine', 'hbs');

const viewsDirectory = path.join(__dirname , "../Temp1/views")
app.set("views" , viewsDirectory)

var hbs = require("hbs")
const partialPath = path.join(__dirname , "../Temp1/Partials")

hbs.registerPartials(partialPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "home",
        desc: "welcome to home page"
     } );
})

app.get('/home', (req, res) => {
    res.render('index', {
        title: "home",
        desc: "welcome to home paage "
     } );
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: "weather page",
        desc: "welcome to weather page ",
        country_name:"cairo",
        latitude: "30.05",
        longitude: "29.30",
        current_weather: "clear", 
        temp: "26"
     } )
})

// lastest

app.listen(port, () => {
    console.log(`Example app listening on on port ${port}`); 
})
