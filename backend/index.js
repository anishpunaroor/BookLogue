const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const passport = require('passport'); 



const server = express(); 
const port = 5000; 

// Set up server on express
server.use(express.urlencoded({ 
    extended: true
})); 
server.use(express.json()); 
server.use(cors()); 

// Use passport middleware
server.use(passport.initialize()); 

server.listen(port, () => console.log(`Server running on port ${port}`)); 