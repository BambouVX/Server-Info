const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./Index.json');
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis pret")
    bot.user.setActivity("lol").catch(console.error)
})


bot.login(cfg.token);