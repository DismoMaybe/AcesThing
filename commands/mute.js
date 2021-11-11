const ms = require('ms')
const Discord = require('discord.js')
module.exports = {
    name: 'mute',
    description: "make people shut up",
    execute(message, args) {
       
        let targetedUser = message.guild.members.cache.get(message.mentions.users.first().id)

       
        if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRAOR) && !targetedUser.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
            const target = message.mentions.users.first();
            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === 'Members');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted.`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));



            } else {
                message.channel.send('Something is not right here... try again!');
            }







        } else {
            message.channel.send('I cannot do that right know... It is up to you!')
        }

    }
}