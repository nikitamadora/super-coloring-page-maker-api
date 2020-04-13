import express from 'express';
import cors from 'cors';
import router from './src/routes/api';
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

// -------------------
//        CORS
// -------------------
const corsOptions = {
  origin: ['http://localhost:4001'],
  methods: "GET,POST,PUT,DELETE"
}

app.use(cors(corsOptions));

// -------------------
//     bodyParser
// -------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------------------
//       Routers
// -------------------
app.use('/api/v1', router);

app.listen(PORT, () => 
  console.log(`Your server is running on port ${PORT}`)
);