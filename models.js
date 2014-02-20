
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "title": String,
  "date": Date,
  "body_text": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


