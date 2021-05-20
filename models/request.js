const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const requestSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  userlocation: { type: String, required: true },
  altitude: { type: String, required: true },
  longtude:{type:String, required:true},
  username:{type: String, required:true, unique: true}
});

requestSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Request', requestSchema);