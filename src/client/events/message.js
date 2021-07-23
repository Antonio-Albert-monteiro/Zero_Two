const Discord = require("discord.js");

module.exports = (client, message) => {
  if (message.author.bot) return;
  
  const getMencion = (id) => new RegExp(`^<@!?${id}>( |)$`);
  
  let prefix;
  prefix = "*";
  
  if (message.content.match(getMencion(client.user.id))) {
    message.channel.send(`Olá ${message.author} o meu prefixo nesse servidor é **${prefix}**`);
  }
  
  if (message.content.indexOf(prefix) !== 0) return;
  const messageArgs = message.content.split(" ");
  const cmd = messageArgs[0];
  const args = messageArgs.slice(1);
  const cmdFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  
  if (cmdFile) {
    return cmdFile.run(client, message, args);
  }
};