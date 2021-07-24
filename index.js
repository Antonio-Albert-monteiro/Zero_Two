const Discord = require("discord.js");
const logger = require("./src/utils/logger.js");
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
/*
const DataIndex = require("./src/database/index");
DataIndex.start();
const modulos = ["Information", "Economy"];
const fs = require("fs");

modulos.forEach(dir => {
  fs.readdir(`./src/commands/${dir}`, (err, files) => {
    if (err) return logger.error(err.message); // caso de error ao ler os arquivos
    logger.sucess(`(COMANDOS): Foi carregados ${files.length} comandos na pasta ${dir}`);

    files.forEach(f => {
      const props = require(`./src/commands/${dir}/${f}`);
      client.commands.set(props.help.name, props); // aqui seta o comando
      props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });
});

fs.readdir("src/client/events", (err, files) => {
  if (err) return logger.error(err.message);

  files.forEach(f => {
    const event = require(`./src/client/events/${f}`);
    const eventName = f.split(".")[0];

    client.on(eventName, event.bind(null, client));
    delete require(require.resolve(`./src/client/events/${f}`));
    logger.sucess(`(EVENTOS): evento ${eventName} foi carregado`);
  });
});

Discord.Message.prototype.quote = async function(content, options) {
  const message_reference = {
    message_id:
      (!!content && !options
        ? typeof content === "object" && content.messageID
        : options && options.messageID) || this.id,
    message_channel: this.channel.id
  };

  const { data: parsed, files } = await Discord.APIMessage.create(
    this,
    content,
    options
  )
    .resolveData()
    .resolveFiles();

  this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference },
    files
  });
};
*/
client.login(process.env.BotToken).then(() => console.log("index carregada"));
