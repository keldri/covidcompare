var admin = require("firebase-admin");
var serviceAccount = require('./ServiceAccountKey.json');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const port = 5000;
var path = require('path');




admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covidcompare032020.firebaseio.com"
});

app.use(express.static('public'));

exports.app = functions.https.onRequest(app);
