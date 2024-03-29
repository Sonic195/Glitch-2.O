import "dotenv";

const { Client, IntentsBitField } = require("discord.js");

const client = Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  client.user.setActivity({
    name: "On Fire",
  });
});

client.login(process.env.DISCORD_TOKEN);
