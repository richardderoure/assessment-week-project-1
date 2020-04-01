const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

// const axios = require('axios');



app.use(cors());
app.use(express.static('public'));
app.get("/", (req, res) => res.send("index"));
app.get('/results', (req,res) => res.send('testing'));
app.get('/testing', (req,res) => res.send('placeholder'));
app.get('/about', (req,res) => res.send('testing'));
app.get('/search-result', (req,res) => req.send(example));
app.listen(port, () => console.log(`running in port ${port}`));




