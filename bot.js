const Discord = require('discord.js');
const botconfig = require("./botconfig.json")

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
  let args = messageArray.slice(1);
  
  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.displayAvatarURL;
    var serverembed = new Discord.RichEmbed()
    .setTitle("TeVeelGames bot help")
    .setColor("#2377ff")
    .addField("/ban", message.guild.name)
    .addField("Je bent gejoined op", message.member.joinedAt)
    .addField("Leden", message.guild.memberCount);

    return message.channel.sendEmbed(serverembed);
  }

  if(cmd === `${prefix}botinfo`){

    var botembed = new Discord.RichEmbed()
    .setDescription("Bot informatie:")
    .setColor("#2377ff")
    .addField("Bot Naam", bot.user.username);

    return message.channel.sendEmbed(botembed);
  }

  if(cmd === `${prefix}hallo`){
    return message.channel.send("Hallo!")  
  }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
