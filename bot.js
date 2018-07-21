const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Dating Roles |$roles `,"http://twitch.tv/S-F")
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



client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove NA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[NA] North America"));
    message.reply('Your role **[NA] North America** has been Removed');
 }
 }); 
	 
	 
client.on('message', message => {
  if (message.content.startsWith('$add NA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[NA] North America"));
    message.reply('Your role updated to **[NA] North America** ');
 }
 }); 


client.on('message', message => {
  if (message.content.startsWith('$add NZ')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[NZ] New Zealand "));
    message.reply('Your role updated to **[NZ] New Zealand** ');
 }
 }); 


client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove NZ')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[NZ] New Zealand"));
    message.reply('Your role **[NZ] New Zealand** has been Removed');
 }
 }); 


client.on('message', message => {
  if (message.content.startsWith('$add EU')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[EU] DUBAI"));
    message.reply('Your role updated to **[EU] Dubai** ');
 }
 }); 


client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove EU')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[EU] Dubai"));
    message.reply('Your role **[EU] Dubai** has been Removed');
 }
 }); 


 
 client.on('message', message => {
  if (message.content.startsWith('$add SA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[SA] South America"));
    message.reply('Your role updated to  **[SA] South America** ');
 }
 }); 
 
 
 client.on('message', message => {
  if (message.content.startsWith('$remove SA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[SA] South America"));
    message.reply('Your role **[SA] South America** has been Removed');
 }
 }); 
 
 
 
 
 client.on('message', message => {
  if (message.content.startsWith('$add MA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[MA] Morocco"));
    message.reply('Your role updated to  **[MA] Morocco** ');
 }
 });

 
  client.on('message', message => {
  if (message.content.startsWith('$remove MA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[MA] Morocco"));
    message.reply('Your role **[MA] Morocco** has been Removed');
 }
 }); 
 
 
 

 client.on('message', message => {
  if (message.content.startsWith('$add EU')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[EU] Europe"));
    message.reply('Your role updated to  **[EU] Europe** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove EU')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[EU] Europe"));
    message.reply('Your role **[EU] Europe** has been Removed');
 }
 }); 
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$add AUS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[AUS] Australia"));
    message.reply('Your role updated to  **[AUS] Australia** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove AUS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[AUS] Australia"));
    message.reply('Your role **[AUS] Australia** has been Removed');
 }
 }); 
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$add AS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[AS] Asia"));
    message.reply('Your role updated to  **[AS] Asia** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove AS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[AS] Asia"));
    message.reply('Your role **[AS] Asia** has been Removed');
 }
 }); 
 
 
 
   client.on('message', message => {
  if (message.content.startsWith('$add RUS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[RUS] Russia"));
    message.reply('Your role updated to  **[RUS] Russia** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove  RUS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[RUS] Russia"));
    message.reply('Your role **[RUS] Russia** has been Removed');
 }
 }); 
 
 
 
   client.on('message', message => {
  if (message.content.startsWith('$add GER')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[GER]Germany"));
    message.reply('Your role updated to  **[GER]Germany** ');
 }
 });
 
 
  client.on('message', message => {
  if (message.content.startsWith('$remove GER')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[GER] Germany"));
    message.reply('Your role **[GER] Germany** has been Removed');
 }
 }); 
 
    client.on('message', message => {
  if (message.content.startsWith('$add UK')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[UK] United Kingdom"));
    message.reply('Your role updated to  **[UK] United Kingdom** ');
 }
 });
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$remove UK')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[UK] United Kingdom"));
    message.reply('Your role **[UK] United Kingdom** has been Removed');
 }
 }); 



    client.on('message', message => {
  if (message.content.startsWith('$add CA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[CA] CANADA"));
    message.reply('Your role updated to  **[CA] CANADA** ');
 }
 });
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$remove CA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[CA] CANADA"));
    message.reply('Your role **[CA] CANADA** has been Removed');
 }
 }); 

 
 client.on("message", message => {
  if (message.content === "$roles") {
   const embed = new Discord.RichEmbed()
       .setColor('#5f0b77')
       .setFooter('Dating Roles Bot')
       .setThumbnail(message.author.avatarURL)
       .setDescription(`
       
 EU   -------------------> Europe
 NA   -------------------> North America
 SA   -------------------> South America
 MA  -------------------> Morocco
 AUS -------------------> Australia
 AS    -------------------> Asia
 RUS  -------------------> Russia
 GER  -------------------> Germany
 UK    -------------------> United Kingdom
 CA    -------------------> Canada
 NZ   -------------------> New Zealand
 EU   -------------------> Dubai
 
 ==================================
      [Prefix : $]
 
 $add                   add a role
 $remove                   remove a role
`)
 message.channel.send(embed);
}  
});








client.login(process.env.BOT_TOKEN);
