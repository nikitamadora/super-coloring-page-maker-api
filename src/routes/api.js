import { addNewArtboard, getArtboards, getArtboardWithId } from '../controllers/artboardCtrl';

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