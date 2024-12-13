const express = require('express');
const usersRouter = require ('/routes/users');
const playlistsRouter = require('./routes/playlists');

const app = express();

app.use('/users', usersRouter);
app.use('/playlists', playlistsRouter);


app.listen(3000,() =>{
    console.log('listening')
});