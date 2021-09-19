const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("Estoy lista Sempai UwU");
    function presence(){
      client.user.setPresence({
        status: "online",
        activity: {
          name:"como de escapar del sotano de Samai",
          type:"WATCHING"
        }
      })
    }
    presence();
});
client.on("message", (message) => {
    let prefix = config.prefix;
  
    if (message.author.bot)return;
    
    if (!message.content.startsWith(prefix))return;
    
    let usuario = message.mentions.members.first() || message.author;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === 'ping'){
      message.channel.send('pong!')
    }
    /*
    if (message.content.startsWith("hola")) {
         message.channel.send("Holi UwU");
    }
    */
  })
client.login(config.TOKEN);
