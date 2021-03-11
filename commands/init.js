module.exports = {
    name: 'init',
    description: 'Reloads the bot! Use this if the bot is having issues or if you want to see versioning information.',
    execute(message, args) {
        message.channel.send("Successfully restarted Game Lister v. 1.40.1; Node Version 15.3.0")
    }
}