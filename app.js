app.get ('/library',(req,res) => {
    const songs = [
        { title: 'Start', artist: 'Asake', url:'https://www.youtube.com/watch?v=STKa-IIY6I8'},
        { title: 'Both Sides of a Smile', artist: 'Santan Dave', url: 'https://www.youtube.com/watch?v=STKa-IIY6I8'}
    ];
    res.render('library', {songs});
});