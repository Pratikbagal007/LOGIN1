const express = require('express');
const path = require('path');
const app = express();
const hbs = require("hbs")
require('./db/conn');
const port = process.env.PORT || 3000;

const static_Path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const template_partials = path.join(__dirname, '../templates/partials');
app.use(express.static(static_Path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(template_partials);
app.get('/', (req, res) => {
  res.render('index');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


