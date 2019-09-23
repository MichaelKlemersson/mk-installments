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

export default app;
