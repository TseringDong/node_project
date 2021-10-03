const express = require('express')
const app = express()
 
app.get('/',  (req, res) => {
  res.json({
      message : "This is a home page"
  });
});

app.get('/profile',  (req, res) => {
    res.send('This is my profile')
});
 
app.listen(3000);

