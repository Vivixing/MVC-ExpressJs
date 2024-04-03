import { Router } from "express";
import { SongController } from "../controller/song.crontroller.js";

export const songRouter = Router();

songRouter.get('/song', SongController.getAll);
songRouter.get('/song/:id', SongController.getById);
songRouter.post('/song', SongController.create);
songRouter.put('/song/:id', SongController.update);
songRouter.delete('/song/:id', SongController.delete);