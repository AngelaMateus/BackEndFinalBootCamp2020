const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const apiConstants = require('./commons/api-constants');
const ridesController = require('./rides/ride.controller');

const baseApiPath = apiConstants.baseApiPath.concat(apiConstants.apiVersion);
const ridesPath = '/rides';

let app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(baseApiPath + ridesPath, ridesController);
//app.use(baseApiPath + carsPath, carsController);

module.exports = app;

