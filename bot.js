const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('De bot is opgestart!');
    bot.user.setGame("door Duncan");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.channel.send("Hallo!");
  	}
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
