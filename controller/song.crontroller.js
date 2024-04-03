import { SongModel } from "../model/song.model.js";
import { songUpdateSchema } from "../validator/song.schema.js";

export class SongController{
    static getById(req, res){
        const {id} = req.params;
        const song = SongModel.getById(id);
        if(song !== null){
            return res.status(200).json(song);
        }
        return res.status(404).json({code_error:'Song not found'});
    }

    static getAll(req, res){
        const {genre} = req.query;
        const songs = SongModel.getAll(genre);
        return res.status(200).json(songs);
    }

    static create(req, res){
        const newSong = req.body;
        const data = songSchema.validate(newSong);
        if(data.error){
            return res.status(400).json(data.error.details[0].message);
        }
        const song = SongModel.createSong(newSong);
        return res.status(201).json(song);
    }

    static update(req, res){
        const {id} = req.params;
        const data = songUpdateSchema.validate(newSong);
        if(data.error){
            return res.status(400).json(data.error.details[0].message);
        }
        const updatedSong = req.body;
        const song = SongModel.updateSong(id, updatedSong);
        if(song){
            return res.status(200).json(song);
        }else{
            return res.status(404).send('Song not found');
        }
    }

    static delete(req, res){
        const {id} = req.params;
        try {
            const result = SongModel.deleteSong(id);
            return res.status(200).json({message: `Song:${result.id} deleted`});
        } catch (error) {
            return res.status(404).json({code_error:'Song not found'});
        }
    }
}