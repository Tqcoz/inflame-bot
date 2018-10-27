const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
const prefix = ".";

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix)) return ;

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("~Inflame Bot Help~")
    .setThumbnail("https://cdn.discordapp.com/attachments/503814751139135509/504044622402551818/InflameLogo.png")
    .addField("About", "InflameBot is a coin and leveling system bot made for InflameMC and the InflameMC Discord.")
    .addField("User Commands", "`.help`, `.coins`, `.pay [@user] {amount}`")
    .addField("Prefix", "Bot's default prefix is `.`")
    .setColor("#0000FF");

    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}