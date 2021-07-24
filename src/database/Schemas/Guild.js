const { Schema, model } = require("mongoose");

const SchemaGuild = new Schema({
  _id: { type: String, require: true },
  prefix: { type: String, default: "*" }
});

const Guild = model("Guilds", SchemaGuild);
module.exports = Guild;