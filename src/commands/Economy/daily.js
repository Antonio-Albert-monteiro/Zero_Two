const User = require("../../database/Schemas/User");
const parse = require("parse-ms");

exports.run = async (client, message, args) => {
  User.findOne({ _id: message.author.id }, async (err, user) => {
    
    const dayInMilliseconds = 8.64e+7;
    const randomCoins = Math.floor(Math.random() * 100);
    const dateOfLastDaily = user.cooldown.daily;
    const userCoins = user.coins;
    
    if (dateOfLastDaily !== null && dayInMilliseconds - (Date.now() - dateOfLastDaily) > 0) {
      const timeLeft = parse(dayInMilliseconds - (Date.now() - dateOfLastDaily));
      const hours = timeLeft.hours;
      const minutes = timeLeft.minutes;
      const seconds = timeLeft.seconds;
      
      return message.quote(
        `Você já coletou o seu daily de hoje, volte em **${hours <= 1 ? "1 hora" : `${hours} horas` }** **${minutes <= 1 ? "1 minuto" : `${minutes} minutos` }** **${seconds <= 1 ? "1 segundo" : `${seconds} segundos` }**`
      );
    } else {
      message.quote(`Parabéns ${message.author.username} hoje você quanhou **${randomCoins}** coins, agora você tem **${randomCoins + userCoins}** coins`);
      await User.findOneAndUpdate({ _id: message.author.id }, { $set: { coins: userCoins + randomCoins, daily: Date.now() } });
    };
  });
}

module.exports.help = {
  name: "daily",
  aliases: ["diario", "money-diario"]
}