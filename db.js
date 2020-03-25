const debug = require('debug')('parking-management:server');
const mongoose = require('mongoose');

// MongoDB Connection URL
const mongoUrl = process.env.DB_URL + ':' + process.env.DB_PORT;

// Database Name
const dbName =
  process.env.NODE_ENV === 'test'
    ? 'parking-management-test'
    : 'parking-management';

// Database URL
const url = mongoUrl + '/' + dbName;

// Options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const initDbConnection = async () => {
  mongoose.connect(url, options);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'database connection error:'));
  db.once('open', () => {
    debug('MongoDB Client Connected!');
  });

  return db;
};

module.exports = initDbConnection;
