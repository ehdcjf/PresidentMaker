const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = 3002;
const router = require('./routes');
const cookieParser = require('cookie-parser')
const axios = require('axios');





app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', router);


app.listen(PORT, () => {
    console.log(`Hello Port ${PORT}`)
})