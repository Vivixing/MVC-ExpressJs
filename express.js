//IMPORTACIONES
//Importa Módulo Express que es un marco de aplicaciones web de Node.js
import express from 'express';
//Importa Módulo BodyParser que analiza el cuerpo de las solicitudes HTTP.
import bodyParser from 'body-parser';
import { songRouter } from './view/song.route.js';
//Instancia de la aplicación Express
const app = express();
//Puerto en el que se ejecutará la aplicación
const port = 3000;

//MIDDLEWARES
//Utiliza el middleware bodyParser.urlencoded para analizar los cuerpos de las solicitudes codificadas en URL.
app.use(bodyParser.urlencoded({extended: false}));
//Utiliza el middleware bodyParser.json para analizar los cuerpos de las solicitudes JSON.
app.use(bodyParser.json());
app.use(songRouter);
//MANEJO DE RUTAS
/*
app.get('/', (req, res) =>{
    res.status(200).send('<h1>¡Hola Mundo!</h1>');
})

app.get('/song', (req, res) => {
    const {genre} = req.query;
    if(genre){
        const songsByGenre = songs.filter(song => song.genre === genre);
        res.status(200).json(songsByGenre);
    }
    res.status(200).json(songs);
})
//Json de la canción por el id específico
app.get('/song/:id', (req, res) => {
    const {id} = req.params;
    const songById = songs.find(song => song.id === id);
    if(songById){
        res.status(200).json(songById);
    }else{
        res.status(404).send('Song not found');
    }
})
app.post('/song', (req, res) => {
    const newSong = req.body;
    const {error} = songSchema.validate(newSong);
    if(error.error){
        res.status(400).send(error.details[0].message);
    }
    console.log(error);
    newSong['id'] = new Date().getTime().toString();
    songs.push(newSong);
    return res.status(201).json(newSong);
})
app.put('/song/:id', (req, res) => {
    const {id} = req.params;
    const songById = songs.find(song => song.id === id);
    if(songById){
        const index = songs.indexOf(songById);
        const updatedSong = req.body;
        const {error} = songUpdateSchema.validate(updatedSong);
        if(error.error){
            res.status(400).send(error.details[0].message);
        }
        songs[index] = updatedSong;
        res.status(200).json(updatedSong);
    }else{
        res.status(404).send('Song not found');
    }
}) 
app.delete('/song/:id', (req, res) => {
    const {id} = req.params;
    const songById = songs.find(song => song.id === id);
    if(songById){
        const index = songs.indexOf(songById);
        songs.splice(index, 1);
        res.status(200).send('Song deleted');
    }else{
        res.status(404).send('Song not found');
    }
})*/
//Escucha en el puerto 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})