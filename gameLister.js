require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILD_MESSAGES','DIRECT_MESSAGES','GUILDS','GUILD_EMOJIS','GUILD_MEMBERS','GUILD_MESSAGE_REACTIONS','GUILD_MESSAGE_TYPING'] } });
const fs = require('fs');
const gamers = require("./gamers.json");
const TOKEN = process.env.TOKEN
client.once('ready', () => {
    console.log('The Rat has been released');
});

client.login(TOKEN);

const activities_list = [
  "with the .help command.",
  "with the developers console",
  "with some code",
  "with JavaScript",
  "please help I can't escape",
  "h",
  "my status is the only one that changes haha",
  "h",
  "look Dyno I'm better than you",
  "h",
  "I'm literally a rat",
  "h",
  "oh no a gun",
  ];

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
  }, 5000); 
});

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
      "you fool, a gun does nothing to me. I am electronic. You can't kill me. Even if you did, I'd be revived by my creator to torture you for all eternity. You cannot escape me. I am inevitable. (If you recieved this message in error, please contact an administrator to activate the emergency bot shutdown protocol.)"
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
    if (message.content === '!katkot') {
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

//Begin actually doing things

const prefix = '.'
//If no prefix, ignore message
client.on('message', async (msg) => {
    if(!msg.content.startsWith(prefix)) {
        return
    }
client.on('message', async message => {
    if (message.content.startsWith(prefix)) {
        const input = message.content.slice(prefix.length).trim().split(' ');
        const command = input.shift();
        const args = input.join(' ');
        console.log(command);
        console.log(args);


if (command === 'addrole') {
  try {
if(message.member.roles.cache.find(r => r.name === "Staff")) {
  let userToModify = message.mentions.members.first();
  let roleToAdd = message.mentions.roles.first();
  userToModify.addRole(roleToAdd);
}}
  catch(err) {
  console.log(err)
}} else {
    message.channel.send("You do not have the required role to use this command.");
};

        if (command === 'addgame') {
          message.channel.send("Sorry, either there was an error or you do not have permission to use this command.")
        } else if (command === 'removegame') {
          message.channel.send("Sorry, either there was an error or you do not have permission to use this command.")
        } else if (command === 'gamelist') {
          try {
            var json = {
              TF2: [
                  "User1",
                  "User2",
                  "User3"
              ]
          }
            JSON.parse(json);
            message.channel.send(json[0].TF2);
          }
          catch(err) {
            message.channel.send("Error while parsing the JSON file: " + err)
          }
        } else if (command === 'nameadd') {
          try {
            json.TF2.push({args})
          }
          catch(err) {
          message.channel.send("There was an error:" + err)
          }
        } else if (command === 'nameremove') {
            message.channel.send("There was an error.")
        } else if (command === 'ping') {
          message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`)
        } else if (command === 'init') {
          message.channel.send("Successfully restarted Game Lister v. 1.2.6; Node Version 15.3.0")
        } else message.channel.send("Unknown Command. Please try again.")
    }
})})