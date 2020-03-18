// MongoDB Connection URL
const mongoUrl = 'mongodb://localhost:27017';

// Database Name
const dbName = 'parking-management';

module.exports = {
  url: mongoUrl + '/' + dbName,
};
