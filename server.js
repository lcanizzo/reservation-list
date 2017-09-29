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

// P A G E   R O U T I N G
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "new-reservation.html"));
});

app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, 'tables.html'));
    // res.json(reservations);    
});

app.post('/', function(req, res){
    var newReservation = req.body;
    // newReservation.id = newReservation.age.replace(/\s+/g, "").toLowerCase();
    // console.log(newReservation);
    
    reservations.push(newReservations)
    res.json(newReservation)
})

app.listen(PORT, function(){
    console.log('listening on:', PORT);
})