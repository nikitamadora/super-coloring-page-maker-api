// const express = require('express');
// const router = express.Router();

import { 
  addNewArtboard, 
  getArtboards, 
  getArtboardWithId 
} from '../controllers/artboardCtrl';

// router.get('/api/v1/artboard', getArtboards);
// router.post('/api/v1/artboard', addNewArtboard);
// router.get('/api/v1/artboard/:artboardID', getArtboardWithId);

const routes = (app) => {
  app.route('/artboard')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from ${req.originalUrl}`)
      console.log(`Request type ${req.method}`)
      next();
    }, getArtboards)

    .post(addNewArtboard);

  app.route('/artboard/:artboardID')
    .get(getArtboardWithId)
    .put((req, res) =>
      res.send('PUT request successful!'))
    .delete((req, res) =>
      res.send('DELETE request successful!'))
}

export default routes;
// export default router;