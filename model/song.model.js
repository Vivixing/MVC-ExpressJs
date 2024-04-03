import { readJSON } from '../utils.js';

const songs = readJSON('./songs.json');

export class SongModel {
    static getAll(genre) {
        if(genre){
            const songsByGenre = songs.filter(song => song.genre === genre);
            return songsByGenre;
        }
        return songs;
    }
    static getSongById(id) { //Falta Completar
        return songs.find(song => song.id === id);
    }
    static createSong(newSong) {
        newSong['id'] = new Date().getTime().toString();
        songs.push(newSong);
        return newSong;
    }
    static updateSong(id, updatedSong) {
        const songById = songs.find(song => song.id === id);
        if(songById){
            const index = songs.indexOf(songById);
            songs[index] = updatedSong;
            return updatedSong;
        }
    }
    static deleteSong(id) {
        const songById = songs.find(song => song.id === id);
        if(songById){
            const index = songs.indexOf(songById);
            songs.splice(index, 1);
            return 'Song deleted';
        }
    }
} 