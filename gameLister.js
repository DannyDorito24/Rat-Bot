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
    if (message.content === 'youtube.com/watch?v=dQw4w9WgXcQ') {
       //send back
       message.channel.send('dead chat xD');
    }
    if (message.content === '!furry') {
      message.channel.send("rawr!");
      setTimeout(() => {message.channel.send('​​x3 nuzzles, pounces on you, uwu you so warm')}, 10000)
      setTimeout(() => {message.channel.send("Couldn't help but notice your bulge from across the floor")}, 10000)
      setTimeout(() => {message.channel.send('Nuzzles your necky wecky ~murr~, hehe​')}, 10000)
      setTimeout(() => {message.channel.send('Unzips your baggy ass pants, oof baby you so musky​')}, 10000)
      setTimeout(() => {message.channel.send("Take me home, pet me, and make me yours and don't forget to stuff me")}, 10000)
      setTimeout(() => {message.channel.send('​See me wag my widdle baby tail all for your bolgy-wolgy')}, 10000)
      setTimeout(() => {message.channel.send('Kissies and lickies your neck​')}, 10000)
      setTimeout(() => {message.channel.send('​I hope daddy likies')}, 10000)
      setTimeout(() => {message.channel.send('​Nuzzles and wuzzles your chest')}, 10000)
      setTimeout(() => {message.channel.send("I be gettin' thirsty")}, 10000)
      setTimeout(() => {message.channel.send('Hey, I got a little itch, you think you can help me?​')}, 10000)
      setTimeout(() => {message.channel.send('​Only seven inches long, uwu, please adopt me')}, 10000)
      setTimeout(() => {message.channel.send('Paws on your bulge as I lick my lips​')}, 10000)
      setTimeout(() => {message.channel.send("'Bout to hit 'em with this furry shit​")}, 10000)
      setTimeout(() => {message.channel.send("Pain.")}, 30000)
      
    }
    const ricklinks = [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      'https://www.youtube.com/watch?v=6_b7RDuLwcI',
    ]
    if (ricklinks.includes(message.content)) {
      //send back
      message.channel.send('That looks like a rickroll. Proceed with caution.');
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
    if (message.content.includes('rat')) {
      message.channel.send('did somebody say')
      setTimeout(() => {message.channel.send('***R A T***')}, 1000)
    }
    if (message.content === '!horny') {
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
          message.channel.send("Successfully restarted Game Lister v. 1.0.0; Node Version 15.3.0")
        } else message.channel.send("Unknown Command. Please try again.")
    }
})})