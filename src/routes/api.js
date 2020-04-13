import express from 'express';
import { 
  addNewArtboard, 
  getArtboards, 
  getArtboardWithId 
} from '../controllers/artboardCtrl';

const router = express.Router();

// -------------------------
//        Artboards
// -------------------------
// Get All Artboards
router.get('/artboard', getArtboards);
// Get One Artboard
router.get('/artboard/:artboardID', getArtboardWithId);
// Add New Artboard
router.post('/artboard', addNewArtboard);

// TODO
// Update an Artboard
// Delete an Artboard

export default router;