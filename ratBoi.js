require('dotenv').config();
const CronJob = require('cron').CronJob;
const { Client, Discord, MessageEmbed } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILD_MESSAGES','DIRECT_MESSAGES','GUILDS','GUILD_EMOJIS','GUILD_MEMBERS','GUILD_MESSAGE_REACTIONS','GUILD_MESSAGE_TYPING'] } });
const fs = require('fs');
const gamers = require("./gamers.json");
const TOKEN = process.env.TOKEN

//enable a native sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

client.once('ready', () => {
  client.user.setPresence({
    status: 'online',
    activity: {
        name: "the world burn",
        type: "WATCHING"
    }
});
    console.log('The Rat has been released');
});

client.login(TOKEN);

//funni message responses
client.on('message', message => {
    console.log(message.author.username, "sent:", message.content);
    if (message.author == client.user)
    return;
    const gun_res = [
      "gun",
      "no don't do it",
      "wait that's illegal",
      "you fool, I have a gun",
      "yes",
      "you fool, a gun does nothing to me. I am electronic. You can't kill me."
    ]
    const gun_index = Math.floor(Math.random() * (gun_res.length - 1) + 1);
    if (message.content === "gun") {
      message.channel.send(gun_res[gun_index])
    }
    if (message.content === 'when in doubt') {
      message.channel.send('vote stan out')
    }
    if (message.content === 'uwu') {
      message.channel.send('Furry detected on American soil. Lethal force engaged')
    }
    if (message.content === 'dead chat xD') {
       //send back
       message.channel.send('dead chat xD');
    }
    const ricklinks = [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      'https://www.youtube.com/watch?v=6_b7RDuLwcI',
    ]
    if (ricklinks.includes(message.content)) {
      //send back
      message.channel.send('That looks like a rickroll...');
   }
    if (message.content === '.katkot') {
      message.channel.send('https://cdn.discordapp.com/attachments/803001546291281931/803030047392923708/image0.webp')
      message.channel.bulkDelete(1)
    }
    if (message.content === '!rat') {
        //send back
        message.reply('https://tenor.com/view/post-this-rat-rat-post-dancing-bounce-gif-16643947');
        message.channel.bulkDelete(1);
    }
    if (message.content === 'rat') {
      message.channel.send('did somebody say')
      setTimeout(() => {message.channel.send('***R A T***')}, 1000)
    }
    if (message.content === '.horny') {
      //send back
      message.reply('https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755');
      message.channel.bulkDelete(1);
    }
    if (message.content === 'h') {
      message.channel.startTyping();
       setTimeout(()=>{
    message.channel.send('ha h').then((message)=>{
        message.channel.stopTyping();
    });
}, 10000)
    }
    else if (message.mentions.users.has(client.user.id) && !message.author.bot) {
      message.channel.send("Wut")
      return
    };
  });

//Commands

const prefix = '.'
//If no prefix, ignore message

client.on('message', async message => {
    if (message.content.startsWith(prefix)) {
        const input = message.content.slice(prefix.length).trim().split(' ');
        const command = input.shift();
        const args = input.join(' ');
        console.log(command);
        console.log(args);
          if (command === 'ping') {
          message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`)
        } else if (command === 'setAvatar') {
          client.user.setAvatar(args)
        } else if (command === 'setStatus') {
          client.user.setActivity(args)
        } else if (command === 'setUsername') {
          client.user.setUsername(args)
        } else if (command === 'init') {
          //const restartEmbed = new MessageEmbed()
            //.setColor('#FF0000')
            //.setTitle('Restarting...')
            //.setDescription('Please Wait... This should take about 10 seconds...')
            //message.channel.send(restartEmbed);
          const restartedEmbed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Restarted!')
            .setDescription('Successfully Restarted Rat Bot Version 2.1; Node Version 15.3.0')
            message.channel.send(restartedEmbed);
            sleep(10000);
            }
        }
    })