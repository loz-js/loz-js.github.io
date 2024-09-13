const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.get(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); 
});
    
app.get('/library', (req, res) => {  
    const songs = [
        { title: 'Start', artist: 'Asake', url:'https://www.youtube.com/watch?v=STKa-IIY6I8'},
        { title: 'Both Sides of a Smile', artist: 'Santan Dave', url: 'https://www.youtube.com/watch?v=OPBSAxv7LCU'}
    ];
    res.render('library', {songs});
});

const PORT = 3000;
app.listen (PORT, () => {
    console.log('https://localhost:${PORT}');
}); 