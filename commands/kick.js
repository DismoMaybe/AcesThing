const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: "really?",
    execute(message, args) {

                let targetedUser = message.guild.members.cache.get(message.mentions.users.first().id)

       
                if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRAOR) && !targetedUser.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
                    const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("The shadow has been kicked")
            }else{
                message.channel.send('You really want to get rid of a fellow theif???')
            }



        } else {
            message.channel.send('I cannot do that right know... It is up to you!')
        }

    }
}