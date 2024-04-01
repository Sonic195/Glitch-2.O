const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: 'online', // You can show online, idle, and do not disturb
        activity: {
            name: 'with the Discord API', // The message shown
            type: 'PLAYING', // PLAYING, WATCHING, LISTENING, STREAMING
        }
    });
});

client.login(process.env.DISCORD_TOKEN);
