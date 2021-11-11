const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: "seriously?",
    execute(message, args) {

        let targetedUser = message.guild.members.cache.get(message.mentions.users.first().id)


        if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRAOR) && !targetedUser.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
            const member = message.mentions.users.first();
            if (member) {
                const targetedUser = message.guild.members.cache.get(member.id);
                targetedUser.ban();
                message.channel.send("The Shadow has been banned")
            } else {
                message.channel.send('You really want to get rid of a fellow Thief???')
            }


        } else {
            message.channel.send('I cannot do that right know... It is up to you!')
        }

    }
}