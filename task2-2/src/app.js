

const express = require('express');
const app = express();
const port = 3000;

const path = require("path");
const x = path.join(__dirname, '../public'); 
app.use(express.static(x));

//hbs
app.set('view engine', 'hbs');
// app.engine('html', require('hbs').__express);

const viewsDirectory = path.join(__dirname , "../Temp1/views")
app.set("views" , viewsDirectory)


// app.get('/', (req, res) => {
//     res.send( 'Hello Sara ');
// })


var hbs = require("hbs")
const partialPath = path.join(__dirname , "../Temp1/Partials")

hbs.registerPartials(partialPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "home",
        desc: "welcome to home paaaaage "
     } );
})

app.get('/home', (req, res) => {
    res.render('index', {
        title: "home",
        desc: "welcome to home paaaaage "
     } );
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: "weather page",
        // name: "what the weather today ? ",
        desc: "welcome to weather page ",
        country_name:"cairo",
        latitude: "30.05",
        longitude: "29.30",
        current_weather: "clear", 
        temp: "26"
     } )
})


// app.get('/contact', (req, res) => {
//     res.send( ' contact  ' );
// })

// app.get('/team', (req, res) => {
//     res.send( '<h2>  Hello team  </h2> <br>  <button> send </button>' );
// })

// app.get('/prices', (req, res) => {
//     res.send( '<h2> prices </h2> <br>  <button> send </button>' );
// })

// app.get('/data1', (req, res) => {
//     res.send({
//         name: "sasa",
//         age: 26,
//         city: "cairo"
//     } );
// })
 

// lastest

app.listen(port, () => {
    console.log(`Example app listening on on port ${port}`); 
})
