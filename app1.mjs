var express = require("express");
const db = require("./db.mjs");
const request = require("request");
var app = express();
const cors = require("cors");
var axios = require("axios");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
var array = [];

//console.log(db);
app.get("/contacts/", (req, res, next) => {
  res.json(db);
});

app.get("/contacts/:id", (req, res, next) => {
  let cid = parseInt(req.params.id);
  res.json(db[cid - 1]);
});

// Update a Customer with Id

app.put("/contacts/:id", (req, res) => {
  let cid = parseInt(req.params.id) - 1;

  var updateObj = { $set: {} };
  updateObj.$set["id." + cid] = req.body.id;
  updateObj.$set["name." + cid] = req.body.name;
  updateObj.$set["email." + cid] = req.body.email;
  updateObj.$set["phone." + cid] = req.body.phone;
  console.log(updateObj);
  db[cid] = updateObj;
  res.json("s");
});
app.delete("/contacts/:id", (req, res, next) => {
  let cid = parseInt(req.params.id) - 1;
  db.splice(cid, cid);
  console.log(db);
  res.send("Done");
});
app.post("/", (req, res) => {
  console.log(req);

  const contact = {
    id: db.length + 1,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  var id = req.body.id;
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  array.push(contact);

  db.push(contact);
  res.send("Done");

  console.log(db);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
