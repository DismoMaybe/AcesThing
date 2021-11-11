const Discord = require('discord.js');
require('dotenv').config();
client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Discord.Intents.FLAGS.GUILD_PRESENCES] })

const prefix = '>';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Congrats, it works!');
    client.user.setPresence({ activities: [{ name: `>help` }], status: `online` })


    
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('860030579301679104').send(`Welcome to my super cool server <@${guildMember.user.id}>,  please check out the Rules, Introductions and Roles to get yourself situated! Thank you for joining!`)
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'live') {
        client.commands.get('live').execute(message, args);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'balls') {
        client.commands.get('balls').execute(message, args);
    }  else if (command == 'funny') {
        client.commands.get('funny').execute(message, args);
    } else if (command == 'like') {
        client.commands.get('like').execute(message, args);
    }
});

client.login(process.env.DISCORD_TOKEN);
