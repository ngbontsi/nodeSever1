const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true,unique: true},
  price: { type: Number, required: true },
});
thingSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Thing', thingSchema);

