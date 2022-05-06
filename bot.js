
require("dotenv").config();
const {prefix, uinfo} = require("./config.json")


const Discord = require("discord.js");


const client = new Discord.Client({
  intents: ["GUILDS", "GUILDS_MESSAGES"],
  partials: ['MESSAGE']
});

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.channel.send("Pong!");
    msg.react('🏓')
  }
})

client.on('messageDelete', msg =>{
  msg.channel.send('Stop it!!')
})

client.on('message', msg =>{
  if(msg.content === '!userinfo'){
    msg.channel.send(`${msg.author.user.tag}`)
  }
})
                                           

client.login(process.env.TOKEN);
