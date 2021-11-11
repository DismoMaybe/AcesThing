const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    description: "it clears messages.",
    async execute(message, args) {

        if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {


            if (!args[0]) return message.reply("Seems like you need a little more than that!");
            if (isNaN(args[0])) return message.reply("I'm having trouble finding the funny part of your joke! Maybe try to be a little more funny next time!");

            if (args[0] > 100) return message.reply("Something is not right here... try again!");
            if (args[0] < 1) return message.reply("Something is not right here... try again!");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });

        } else {
            message.channel.send('You are not yet strong enough to do this...')

        }
    }
}