const mongoose = require("mongoose");
const logger = require("../utils/logger");

module.exports = {
  start() {
    try {
      
      mongoose.connect(process.env.DataToken, {
        "useNewUrlParser": true,
        "useUnifiedTopology": true,
        "useFindAndModify": false
      });
      
      logger.sucess("(DATABASE): Conectado a database");
    } catch (err) {
      logger.err(`(DATABASE): ` + err)
    }
  }
}