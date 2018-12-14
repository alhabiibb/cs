const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("تم التشغيل,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("511595760345939968");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Ꮃelcome Ꭲo Ꮪerver Trick..**`), 6000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "." && ch.type === 'voice').join();

});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("TK Server",{type: 'LISTENING'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});









client.login(process.env.USER_TOKEN);
