import express from 'express';
import apiRouter from './src/routes/api';
import viewsRouter from './src/routes/views';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise; // We wait for a result when we connect to MongoDB
mongoose.connect('mongodb://localhost/super-coloring-page-maker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------------------
//       Routers
// -------------------
app.use('/api/v1', apiRouter);
app.use('/', viewsRouter);

app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);