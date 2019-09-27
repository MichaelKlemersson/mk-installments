import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import config from './config';
import apiRoutes from './routes';

const app = express();
const upload = multer();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(config.API_PREFIX, upload.array(), apiRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

export default app;
