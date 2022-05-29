import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mockups_data from './routes/mockups_data.js';

// const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/mockups_data', mockups_data)

app.get('/', (req, res) => {
    res.send('Hello')
})

// app.use("/api", () => console.log("test"))

app.listen(PORT, ()=> console.log(`sever is running on port: ${PORT}`));