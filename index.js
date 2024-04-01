const DiscordRPC = require('discord-rpc');

// Initialize Discord RPC
DiscordRPC.register(process.env.APP_ID);
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log('Discord Rich Presence is ready!');
  // Update presence when ready
  rpc.setActivity({
    details: 'Bot Status',
    state: 'Online',
    startTimestamp: new Date(),
    largeImageKey: 'your_large_image_key',
    smallImageKey: 'your_small_image_key',
    instance: false,
  });
});

rpc.login({ clientId: process.env.APP_ID });
