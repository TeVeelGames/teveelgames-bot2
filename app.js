const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')
var prefix = settings.prefix;

client.on("ready", () => {
    console.clear();
    console.log("Bot is opgestart!")
    client.guilds.get(settings.guild).channels.get(settings.channel).join().then(connection =>{
    var dispatcher = connection.playStream(settings.streamurl);
    dispatcher.setVolume(settings.volume)
    })

    client.user.setActivity(settings.game, "LISTENING")
});



client.login(settings.token);