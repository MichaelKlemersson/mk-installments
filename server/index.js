const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// routes
const apiRoutes = require('./routes');

app.use(`${config.API_PREFIX}`, apiRoutes);

app.list(process.env.PORT || 5000, () => 'Server has started');
