const { Schema, model } = require("mongoose");

const SchemaUser = new Schema({
  _id: { type: String, require: true },
  daily: { type: Number, default: 0 },
  coins: { type: Number, default: 0 },
  banco: { type: Number, default: 0 }
});

const User = model("Users", SchemaUser);
module.exports = User;