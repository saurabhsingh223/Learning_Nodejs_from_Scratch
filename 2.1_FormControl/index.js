const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// middleware
app.use(morgan('dev'));

//Post method use krne k liye hum 2 in-build middleware ko use krte hain
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// css add krne k liye ek middleware
app.use(express.static("public"))

// view engine setup
app.set('view engine', 'ejs');

// home route
app.get('/', (req, res) => {
  res.send('Hello Form handler');
});

// form page route
app.get('/form', (req, res) => {
  res.render('form');
});

// form data receive route (GET method)
// now in the .ejs form page, we will give this route to the form action, soo after submission, 
// the response shoud be displayed on the fronted
// app.get('/get-form-data', (req, res) => {
//   console.log(req.query);
//   res.send('Data received successfully');
// });
app.post('/get-form-data', (req, res) => {
  console.log(req.body);
  res.send('Data received successfully');
});

// server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
