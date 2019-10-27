var express = require('express');
var api = require("./backEnd/api/api");
const db = require('better-sqlite3')('database.db', {});

var app = express();

//serve front end file
app.use(express.static('src/frontEnd'));

//init web api
api.register(app, db);

app.listen(7777);
