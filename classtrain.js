const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const database = [
    {
        name: 'keyboard',
        id : 1,
        price : 120,
        description : "magnetic keyboard",
        stock : 50,
        photo : "https://rukminim1.flixcart.com/image/612/612/keyboard/standard-keyboard/r/r/q/logitech-k230-original-imaegz4n6fwgyzfn.jpeg?q=70"

    },
    {
        name: 'mouse',
        id : 2,
        price : 70,
        description : "magnetic mouse",
        stock : 25,
        photo : "https://media.4rgos.it/s/Argos/8209638_R_SET?$Web$&$Main350$&w=238&h=238&qlt=70"

    }
];

// this line MUST be before any routes are defined
app.use(bodyParser.json())

function showItems(arr){
    let output= "";
 for (i=0;i<arr.length;i++){
     output=output + arr[i].name + "</br>";

 }
 return output;
}

app.get('/', (req, res) => {
    res.send(`<h1>${showItems(database)}</h1>`);
});

// send all users to client
app.get('/products', (req, res) => {    
    res.send(database);
});

app.get('/products/:id', (req, res) => {    
    res.send(req.param[1]);
    console.log("req param works");
});


// add a user to server
app.post('/items', (req, res) => {
    const user = req.body;
    database.push(iten);
    res.send(`item #${database.length} has been added`);
});

app.listen(port, () => {
    console.log(`Hello, i am running in port: ${port}`);
    console.log(database);
});