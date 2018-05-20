const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !report <lid> <reden>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#01A1FF")
    .addField("Lid:", `${rUser}`)
    .addField("Door:", `${message.author}`)
    .addField("Tijd:", message.createdAt)
    .addField("Reden:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Kan report kanaal niet vinden.");
    return msg.channel.send(`✅ Je report is verzonden`);
    reportschannel.sendEmbed(reportEmbed);

}

module.exports.help = {
  name: "report"
}
