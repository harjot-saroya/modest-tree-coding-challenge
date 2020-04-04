const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("static"));

if (!localStorage.getItem("contact")) {
  localStorage.setItem("contact", JSON.stringify({ next: 0, items: [] }));
}

/*  ******* Data types *******
        contact objects have the following attributes:
            - (String) contactId 
            - (String) name
            - (String) email
            - (String) phone
    
    ****************************** */

// add a contact
// return an contact object

app.use(function(req, res, next) {
  console.log("HTTP request", req.method, req.url, req.body);
  console.log(Object.keys(req.body));
  next();
});

// Initialize objects

app.use(function(req, res, next) {
  console.log("HTTP request", req.username, req.method, req.url, req.body);
  next();
});

// Creates Contact
app.post("/api/contacts/", function(req, res, next) {
  // store data here
  var contact = JSON.parse(localStorage.getItem("contact"));
  var item = {
    id: contact.next++,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  contact.items.push(item);
  localStorage.setItem("contact", JSON.stringify(contact));
  res.json(item);
});

// Gets Contacts
app.get("/api/contacts/", function(req, res, next) {
  var contact = JSON.parse(localStorage.getItem("contact"));
  res.json(contact);
});

// Updates Contact
app.put("/api/contacts/:id/", function(req, res, next) {
  var contact = JSON.parse(localStorage.getItem("contact"));
  var index = contact.items.findIndex(function(item) {
    return item.id == req.params.id;
  });
  if (index == -1) res.send(404);
  var item = contact.items[index];
  item.name = req.body.name;
  item.email = req.body.email;
  item.phone = req.body.phone;
  res.json(item);
});

// Gets Contact by id
app.get("/api/contacts/:id/", function(req, res, next) {
  var contact = JSON.parse(localStorage.getItem("contact"));
  var index = contact.items.findIndex(function(item) {
    return item.id == req.params.id;
  });
  if (index == -1) return null;
  var item = contact.items[index];
  res.json(item);
});

// Deletes a Contact by id
app.delete("/api/contacts/:id/", function(req, res, next) {
  var contact = JSON.parse(localStorage.getItem("contact"));
  var index = contact.items.findIndex(function(item) {
    return item.id == req.params.id;
  });
  if (index == -1) return null;
  var item = contact.items[index];
  contact.items.splice(index, 1);
  localStorage.setItem("contact", JSON.stringify(contact));
  res.json(item);
});

const http = require("http");
const PORT = 3000;

http.createServer(app).listen(PORT, function(err) {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});
