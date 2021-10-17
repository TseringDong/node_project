require('dotenv').config() 
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let users = []; // { id, name, email, address}

app.use(bodyParser.json());
 
//CRUD

// get all users, Request method: GET
app.get('/users', (req, res) => {
  res.json(users);
});

// create new user, Request method: POST
app.post('/users', (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
  // res.json(req.body);
}); 

// get user by id, Request method: GET

app.get('/users/:id', (req, res) => {
  let user = users.find(user => user.id ===parseInt(req.params.id));
  if (!user) res.status(404).send("The user with the given ID was not found.");
  res.json(user);
})
 
// app.get('/',  (req, res) => {
//   res.json({
//       message : "This is a home page"
//   });
// });

// app.get('/profile',  (req, res) => {
//     res.send('This is my profile')
// });
 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is runnin on port ${port}`);
});

