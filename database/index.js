const mongoose = require("mongoose");
const db_config = global.config.database;

/*
    Legacy for Mongoose 4
*/
mongoose.Promise = global.Promise;

const connection = mongoose.connect(db_config.mongodb.uri);

connection
  .then((db) => {
    console.log(
      `Successfully connected to ${db_config.mongodb.uri} MongoDB cluster.`
    );
    return db;
  })
  .catch((err) => {
    if (err.message.code == "ETIMEDOUT") {
      mongoose.connect(db_config.mongodb.uri);
    } else {
      console.log("Error While Connecting to Database");
    }
  });

module.exports = connection;
