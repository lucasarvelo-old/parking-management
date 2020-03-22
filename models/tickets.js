const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
  checkIn: {
    type: Date,
    default: Date.now,
  },
  checkOut: {
    type: Date,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

schema.plugin(AutoIncrement, { inc_field: 'ticketNumber' });

module.exports = mongoose.model('Ticket', schema);
