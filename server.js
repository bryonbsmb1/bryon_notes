// creating server file code

const express = require('express');

const fs = require('fs');

const fs = require('path');

const uuid = require('uuid');

const app = express();
const PORT =process.env.PORT || 3001;





app.use(express.json());
app.use(express.urlencoded({ extended: true}));
