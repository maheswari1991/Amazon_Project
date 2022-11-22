const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HZDIqC4DEnnOjjwNdYHJAVqY4vi3dBy4fz5EFMck571Sh5acqRLPU81772AMqutjUpveG2c2NKfXRANjfH3PCcQ00Wmxow73w')

//API

// App Config

const app = express();

//Middleware
app.use(cors({ origin: true}));
app.use(express.json());


//API - routes

app.get('/', (require, response) => response.status(200).send('hello world'))

//Listen Command

exports.api = functions.https.onRequest(app);