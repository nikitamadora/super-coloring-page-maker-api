import express from 'express';
const viewsRouter = express.Router();

// Homepage & Canvas View
viewsRouter.get('/', (req, res) => {
  res.sendFile('/views/index.html', {
    root: __dirname + '/../'
  });
});

viewsRouter.get('/gallery', (req, res) => {
  res.sendFile('/views/gallery.html', {
    root: __dirname + '/../'
  });
});

export default viewsRouter;