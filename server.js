// creating server file code

const express = require('express');

// needed to add notes to render the site route

const fs = require('fs');

const notes = require('./db/db.json')

const path = require('path');

const uuid = require('uuid');

const app = express();
const PORT =process.env.PORT || 3001;




app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

// added app.get notes
    app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/public/index.html'));
        });
    
    
    app.get('/notes', (req, res) => {res.sendFile(path.join(__dirname, '/public/notes.html'));
        });

        
    app.get('/api/notes', (req,res) => res.status(200).json(notes))
    

    app.get('/api/notes', (req, res) => {fs.readFile('./db/db.json', (err, data) => {
          if (err) throw err;
          res.send(JSON.parse(data));  
        });
        });

app.post('/api/notes', (req, res) => {

    if (err) throw err;
    const obj =JSON.parse(data);
    console.log(obj);
    obj.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(obj), (err, data) => {
        if (err) throw err;
        fs.readFile('./db/db.json', (err, data) => { if (err) throw err; res.send(JSON.parse(data));

        });
    } );
});  

app.delete('/api/notes/:id', (req,res) => 
{fs.readFile('./db/db.json','utf8', (err, data) =>{






if (err) throw err; const obj = JSON.parse(data); obj.forEach(element => {
    if (element.id === req.params.id){

        obj.splice(obj.indexOf(element));

    }
    
});
fs.writeFile('./db/db.json', JSON.stringify(obj), (err, data) => {
    if (err) throw err;
        if (err) throw err;
        res.status(200).json(`Note deleted successfully!`); 
} );
});  
});

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});





