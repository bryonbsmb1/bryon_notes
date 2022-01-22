// creating server file code

const express = require('express');

const fs = require('fs');

const fs = require('path');

const uuid = require('uuid');

const app = express();
const PORT =process.env.PORT || 3001;





app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));


    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
        });
    app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/notes.html'));
        });
    app.get('/api/notes', (req, res) => {
      fs.readFile('./db/db.json', (err, data) => {
          if (err) throw err;
          res.send(JSON.parse(data));  
        });
        });




        
