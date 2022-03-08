const Discord = require("discord.js");
const client = new Discord.Client();
const Age = new (require("./Age"));

client.login(process.env.DISCORD_CLIENT_TOKEN);

client.on("message", (message) => {
  let params = message.content.split(' ');
    if(params[0].toUpperCase() === '!DEATHNUMBER') {
      let finalAge = Age.yearCalc({currentAge: params[1], doesSmoke: false, doesWorkout: false})
      console.log(finalAge);
    }
});
