import mongoose from 'mongoose';
import { ArtboardSchema } from '../models/Artboard';

// Create a new Artboard contructor with mongoose,
// then execute the model function, passing the Artboard
// as the main object to create new objects in the db
// leveraging the ArtboardSchema as the model for our Artboards
const Artboard = mongoose.model('Artboard', ArtboardSchema);

// Take the request body, convert it to JSON, save to db
export const addNewArtboard = (req, res) => {
  let newArtboard = new Artboard(req.body);

  newArtboard.save((err, artboard) => {
    if (err) {
      res.send(err);
    }
    res.json(artboard);
  });
}

export const getArtboards = (req, res) => {
  Artboard.find({}, (err, artboard) => {
    if (err) {
      res.send(err);
    }
    res.json(artboard);
  });
}

export const getArtboardWithId = (req, res) => {
  Artboard.findById(req.params.artboardID, (err, artboard) => {
    if (err) {
      res.send(err);
    }
    res.json(artboard);
  });
}