// Web Framework
const express = require('express');
let app = express();
const port = process.env.PORT || 3000;

// Import CSV data
const parseCSVToJSON = require('./services/parseCsvToJson');
const dataToSend = parseCSVToJSON('data.csv');

app.get('/', (req, res) => {
  res.json(dataToSend);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
