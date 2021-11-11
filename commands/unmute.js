const Discord = require('discord.js')
module.exports = {
    name: 'unmute',
    description: "make people shut up but no",
    execute(message, args) {
       
        if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
          const target = message.mentions.users.first();
          if(target){
              let mainRole = message.guild.roles.cache.find(role => role.name === 'Members');
              let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

              let memberTarget= message.guild.members.cache.get(target.id);

              memberTarget.roles.remove(muteRole.id);
              memberTarget.roles.add(mainRole.id);
              message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`)
          } else{message.channel.send('WRONG [NO DEAL]');
          } 
        } else {
            message.channel.send('neeD to bE [Big Shot]')
        }

    }
}