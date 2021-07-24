const Guild = require("../../database/Schemas/Guild");
const User = require("../../database/Schemas/User");
const logger = require("../../utils/logger");

module.exports = (client, message) => {
  if (message.author.bot) return;
  // fazendo umas buscas pela database...
  Guild.findOne({ _id: message.guild.id }, async (errServer, server) => {
    User.findOne({ _id: message.author.id }, async (errUser, user) => {
      if (errServer) return logger.error(`(EVENTO MESSAGE): ` + errServer);
      if (errUser) return logger.error(`(EVENTO MESSAGE): ` + errUser);

      // aqui que realmente começar o evento sksksk
      const ifMentioned = id => message.content === `<@${client.user.id}>`;
      const prefix = server.prefix;

      if (ifMentioned)
        return message.quote(
          `Olá meu nome é ${client.user.username} é o meu prefixo nesse servidor é **${prefix}**`
        );
      
      
      if (message.content.startWith(prefix) === false) return;
      const messageArray = message.split(" ");
      const commandName = messageArray[0].slice(prefix.length);
      const messageArguments = messageArray.slice(1);

      
    });
  });
};
