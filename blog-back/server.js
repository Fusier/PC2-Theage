const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  Entry = require('./api/models/blogEntryModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Blogdb')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const blogRoutes = require('./api/routes/blogRoutes'); 
blogRoutes(app);

const homeRoutes = require('./api/routes/homeRoutes');
homeRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port);
