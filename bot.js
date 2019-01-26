const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("تم التشغيل,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("532228348278079489");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`Welcome to  **Arbilank** Server`), 6000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "." && ch.type === 'voice').join();

});













client.login(process.env.USER_TOKEN);
