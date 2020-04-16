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
// GET All Artboards
router.get('/artboard', getArtboards);
// GET One Artboard
router.get('/artboard/:artboardID', getArtboardWithId);
// POST New Artboard
router.post('/artboard', addNewArtboard);

// TODO
// Update an Artboard
// Delete an Artboard

export default router;