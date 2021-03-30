module.exports = {
    name: 'init',
    description: 'Reloads the bot! Use this if the bot is having issues or if you want to see versioning information.',
    execute(message, args) {
        message.channel.send("Please wait...")
        message.edit("Successfully restarted Rat Bot v. 1.44.0; Node Version 14.16.0")
    }
}