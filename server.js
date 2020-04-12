import express from 'express';
import routes from './src/routes/api';
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

routes(app);

app.get('/', (req, res) => 
  res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);