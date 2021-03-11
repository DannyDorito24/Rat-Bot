module.exports = {
    name: 'addrole',
    description: 'Adds a role to a user. You must have the Staff role to use this command.',
    execute(message, args) {
        if(message.member.roles.cache.find(r => r.name === "Staff")) {
            let userToModify = message.mentions.members.first();
            let roleToAdd = message.mentions.roles.first();
            userToModify.addRole(roleToAdd);
          } else(message.channel.send('Sorry! You need to have the "Staff" role to use this command'))
    },
}