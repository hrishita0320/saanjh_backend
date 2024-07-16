const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const approute = require('../backend/route');
const path = require('path');
const cors = require('cors');
const app =express();
const bodyParser = require('body-parser');
const { Pdf} = require("./schema");

app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.json({ limit: '100mb' }));

app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use(express.json());

app.use(express.static(path.join(__dirname, './build')));

app.get('/', cors(), (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

let corspolicy = {
    origin : "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
};
app.use(cors(corspolicy));
app.use('/en', approute);
const mongoUrl = process.env.DBURI;
mongoose.connect(mongoUrl).then(()=>{
    console.log('Connected to the database')
})
.catch((e) => console.log(e));

// app.get('*', function(req,res){
//     res.sendFile(path.resolve(__dirname,'./build', 'index.html'));
// })

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});
