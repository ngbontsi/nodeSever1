const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const addressSchema = mongoose.Schema({
  streetname: { type: String, required: true, unique: true },
  suburb: { type: String, required: true },
  region: { type: String, required: true },
  pobox: { type: String, required: true },
  user_id: { type: String, required: true }
});

addressSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Address', addressSchema);
