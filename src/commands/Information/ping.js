const Discord = require("discord.js");
const logger = require("../../utils/logger");

exports.run = (client, message, args) => {
  message.channel
    .send(`O meu ping é de **${client.ws.ping}ms**`)
    .then(m => m.delete({ timeout: 5000 }))
    .catch(logger.error);
};

module.exports.help = {
  name: "ping",
  aliases: ["pong", "ws"]
};
