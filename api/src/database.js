const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'db';


class Database {
  constructor() {
    this._connect();
  }
  
  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
        console.error(err);
      });
  }
}

module.exports = new Database();
