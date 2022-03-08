const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.DISCORD_CLIENT_TOKEN);

client.on("message", (message) => {
  console.log(message);
});
