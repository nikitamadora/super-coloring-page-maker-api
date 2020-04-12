import express from 'express';
import { 
  addNewArtboard, 
  getArtboards, 
  getArtboardWithId 
} from '../controllers/artboardCtrl';

const apiRouter = express.Router();

// -------------------------
//        Artboards
// -------------------------
// Get All Artboards
apiRouter.get('/artboard', getArtboards);
// Get One Artboard
apiRouter.get('/artboard/:artboardID', getArtboardWithId);
// Add New Artboard
apiRouter.post('/artboard', addNewArtboard);

// TODO
// Update an Artboard
// Delete an Artboard

export default apiRouter;