
const Discord = require("discord.js");
const prefix = ".";
module.exports.run = async (bot, message, args) => {

    if(!message.content.startsWith(prefix)) return ;
    if(!message.author.hasPermission === ('ADMINISTRATOR')) return ;
    let updateMsg = args[0];
    let gitUpdateEmbed = new Discord.RichEmbed()
    .setDescription(":arrow_up: **New GitHub Update** :arrow_up:")
    .addField("Update", updateMsg)
    .setThumbnail("http://pluspng.com/img-png/github-octocat-logo-vector-png-png-ico-icns-svg-more-512.png")
    .setFooter("Visit our official GitHub page [here](https://github.com/Tqcoz/inflame-bot).");
    
    message.channel.send(gitUpdateEmbed);

}

module.exports.help = {
  name: "restart"
}
