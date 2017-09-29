
// D E P E N D E N C I E S 
const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');

// E X P R E S S  A P P 
const app = express();
const PORT = 8888;

// D A T A   P A R S I N G
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// R E S E R V A T I O N    D A T A 
let reservations = [
    {
        name: "Mike Roe",
        phone: 4079734444,
        email: "mike.roe@gmail.com",
        id: "M.Roe"
    },
];

app.get('/', function(req, res){


})

app.get('/tables', function(req,res){


})

app.post('/', function(req, res){

    var newReservation = req.body;

    // newReservation.id = newReservation.id.replace(/\s+/g, "").toLowerCase();
    // console.log(newReservation);

    reservations.push(newReservations)

    res.json(newReservation)
})





app.listen(PORT, function(){
    console.log("PORT 8888 is running.");
})