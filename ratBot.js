require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN
const fs = require('fs');

client.once('ready', () => {
    console.log('Hey asshole, your shitty code worked!');
});

client.login(TOKEN)
console.log("Logged in to Discord with ID 782743793367121981. Time to commit some sins");
client.on('message', message => {
    console.log(message.author.username, "sent:", message.content);

if (message.content === '!ping') {
    message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`)
} else if (message.content === '!init') {
    message.channel.send("Please wait...")
    message.edit("Successfully restarted Rat Bot v. 2.0")
}
});