//This code was made in a repl, so, some things may be different. You will need a file called "prefixes.db" or it might be automatically created. 
// All mentions of snowflake IDs should be changed, or in some cases removed. In this case, "514268920627331082" is brought up, that is my discord ID, and would be replaced with yours.
// "809668618597826632" is my own guild ID, that should be replaced with yours as well. Anything you'd like can be changed but please read what's in readme.md
// "816457112804261908" is the bots ID, that should be replaced with your bots application ID.
// Please contact me on discord at CantChooseThis#6982, or Cant@Choosethis.org for any questions related to the code. 
// You can remove defaultPrefix = "?" if you need to. GuildPrefix and default prefix are if you want a custom prefix, if not replace all mentions of them with whatever you'd like. 
var defaultPrefix = "?" 
var guildPrefix = ""
const express = require('express');
const app = express();
const port = 6969;
app.get('/', (req, res) => res.send('The man himself is online'));
app.listen(port, () => console.log(`Logged in at ${Date.now()}. ChooseBot is online at https://localhost:${port}`));
const redditImageFetcher = require("reddit-image-fetcher")
const Discord = require('discord.js');
const client = new Discord.Client(); // { ws: { properties: { $browser: "Discord iOS" }} }
const figlet = require('util').promisify(require('figlet'));
const DIG = require("discord-image-generation");
const prefix = require('discord-prefix');
const fs = require('fs');
client.on("guildCreate", guild => {
 let channelID;
 let channels = guild.channels.cache;
 channelLoop:
     for (let key in channels) {
         let c = channels[key];
         if (c[1].type === "text") {
             channelID = c[0];
             break channelLoop;
         }
     }
 let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
 console.log(`I just got added to a new server "${guild.name}. (${guild.id})"`)
const welEmbed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setAuthor('Yo yo whats up?')
 .setTitle('Thanks for inviting me to your server!')
 .setDescription(`You can find out my commands using "?help". Report any bugs using ?report!  `)
 .setFooter('Bleep Bloop Imma bot')
channel.send(welEmbed);
});
client.on('ready', () => {
  console.log(`im in`)
 setInterval(() => { //${client.guilds.cache.size}
 var statuses=[`?help`,`choosethis.org/choosebot`,`${client.guilds.cache.size} servers`,`r/funny`,'bruh','dis.choosethis.org 😳','vote.choosethis.org','choosethis.org','so many servers (i am watching a lot of them)','you','me','cantchoosethis','yo"ure mom',`reddit tts videos`,`disc.choosethis.org`,'?vote'] 
 var status = statuses[Math.floor(Math.random() * statuses.length)];
     client.user.setActivity(status,{ type: 'WATCHING' })
 }, 120000);  // Runs this every x seconds.
}); 
client.on('message', async message => {
const timeTaken = Date.now() - message.createdTimestamp;
let guildPrefix = prefix.getPrefix(message.guild.id);
if (!guildPrefix) guildPrefix = defaultPrefix;
if (!message.author.bot) {
if (message.content.toLowerCase().startsWith(`${guildPrefix}ping`)) {
const timeTaken = Date.now() - message.createdTimestamp;
const pingEmbed = new Discord.MessageEmbed()
.setAuthor(`Ping pong!`)
.setColor(`#0xff0000`)
.setTitle(`Ping?`)
.setDescription(`The latency is: ${timeTaken}ms`) // ${timeTaken}ms
.setFooter(`Bleep Bloop ChooseBot`)
message.channel.send(pingEmbed)
}
if(message.content.toLowerCase().startsWith(`${guildPrefix}suggest`)) { //suggest you know what it does
_sug = message.content.substring(guildPrefix.length+"suggest".length)
_cct = '514268920627331082';
const sugEmbed = new Discord.MessageEmbed()
.setColor('#0xffaaaa')
.setAuthor('Suggestion time!')
.setTitle(`${message.author.tag}'s suggestion.`)
.setDescription(`${_sug}`)
.setFooter(`(${message.author.id})`)
client.users.cache.get(_cct).send(sugEmbed);
message.channel.send("Suggestion sent! Also, you can join our server to get help or suggest things there! (discord.gg/zmgG2btgef)")
}
if(message.content === ('<@!816457112804261908>')) { //ping reply basically
const pingedEmbed = new Discord.MessageEmbed()
.setColor('#0xffaaaa')
.setAuthor('Ping pong!??!')
.setTitle('bruh who pinged me')
.setDescription(`okay whatever. my prefix is ${guildPrefix} and you can use ${guildPrefix}help to get my features.`)
.setFooter('Bleep Bloop ň̴̨͇̫͚̩́̎̒̇̀͜͜͝e̸̼̥̘͔͎͓̲̅̍̀̊͘v̴̝͎͚̱̦̻̊͒͆͌̀̀̍͒͗́ͅé̴͇͎̙̐ṟ̴̛̖͈̼͍͉̺̓̑ ̵̧͍̤͉͖̖̙̼͕̿͜p̷̙̮̘͚̬̪̬̏̄͆͐̐̍ì̶̛̬̂̇͋̄̈́̀̕͝ṅ̴̨͓̈͂͒̂̂͐̚͠g̸̡̭̹̘̣̜̜͕̾͛̚̚̚ ̸͙̠̪͕̾͝m̴̢̱̥̞̥̮̘̘̥̈̈́e̴̘̱̘̲̠̊̆̇ͅ ̴̞͎̾a̶̤̹͂͛́g̵̛̗̘̯̀͊̐̀̒̂̈a̷̟̯͈͚̳̜̰̱͂́̉́͆͘ï̴͔̂̓ṅ̵͕̦͊͛̂̊͝')
message.channel.send(pingedEmbed)
}
if(message.content.toLowerCase().startsWith(`${guildPrefix}report`)) { //report it does what you think
_rep = message.content.substring(guildPrefix.length+"report".length)
_cct = '514268920627331082';
const repEmbed = new Discord.MessageEmbed()
.setColor('#0xffaaaa')
.setAuthor('Report time!')
.setTitle(`${message.author.tag}'s report.`)
.setDescription(`${_rep}`)
.setFooter(`(${message.author.id})`)
client.users.cache.get(_cct).send(repEmbed);
message.channel.send("Report sent!")
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}invite`)) { //invite command you know what it does
const invEmbed = new Discord.MessageEmbed()
.setColor('0xffaaaa')
.setTitle('Adopt Me 😳')
.setDescription('You can [Click Here](https://invite.choosethis.org) to invite me! (This requires you to have the `Manage Server` permission in the server.)')
.setFooter('Bleep Bloop Imma Bot')
message.channel.send(invEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}ip`)) { //returns a mentioned users **FAKE** IP
function rando(max) {
 return Math.floor(Math.random() * Math.floor(max));
}
const users = message.mentions.users.first() || message.author
var rand1 = rando(255);
var rand2 = rando(99);
var rand3 = rando(254);
var rand4 = rando(256);
var ip=[rand1+'.'+rand2+'.'+rand3+'.'+rand4]
const ipEmbed = new Discord.MessageEmbed()
.setColor('0xffaaaa')
.setTitle(`omg  i got their ip 😳` )
.setDescription(`omg??! ${users}\'s ip is `+ip)
.setFooter(`how did this happen 😱`)
message.channel.send(ipEmbed)
}
/* Start IMG */
if (message.content.toLowerCase() === `${guildPrefix}image delete`) {
  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
  let img = await new DIG.Delete().getImage(avatar)
  let attach = new Discord.MessageAttachment(img, "delete.gif");;
    message.channel.send(attach)
}
if (message.content.toLowerCase() === `${guildPrefix}image trash`) {
  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
  let img = await new DIG.Trash().getImage(avatar)
  let attach = new Discord.MessageAttachment(img, "trash.gif");;
    message.channel.send(attach)
}
if (message.content.toLowerCase() === `${guildPrefix}image stonks`) {
  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
  // Make the image
  let img = await new DIG.Stonk().getImage(avatar)
  // Add the image as an attachement
  let attach = new Discord.MessageAttachment(img, "stonks.gif");;
    message.channel.send(attach)
}
if (message.content.toLowerCase() === `${guildPrefix}image bobross`) {
  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
  // Make the image
  let img = await new DIG.Bobross().getImage(avatar)
  // Add the image as an attachement
  let attach = new Discord.MessageAttachment(img, "bobross.gif");
    message.channel.send(attach)
}
if (message.content.toLowerCase() === `${guildPrefix}image wanted`) {
  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
  let img = await new DIG.Wanted().getImage(avatar, `$`);
  // Add the image as an attachement
  let attach = new Discord.MessageAttachment(img, "wanted.gif");;
    message.channel.send(attach)
}
if (message.content.toLowerCase() === `${guildPrefix}image blur`) {
  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'gif' });
  let img = await new DIG.Blur().getImage(avatar, 5);
  let attach = new Discord.MessageAttachment(img, "blur.gif");;
    message.channel.send(attach)
}
/* End IMG */
if (!message.author.bot) {
 if (message.content.includes('woosh') || message.content.includes('wooosh') || message.content.includes(`woooosh`)){
   message.channel.send(`WOW kid you just got r/WOOOOOOSHED!!!! 😂😂👀
 "Wooosh" means you didn't get the joke, as in the sound made when the joke "woooshes" over your head. I bet you're too stupid to get it, IDIOT!! 😤😤😂 His joke was so thoughtfully crafted and took him a total of like 3 minutes, you SHOULD be laughing. 🤬 What's that? His joke is bad? I think that's just because you failed. He outsmarted you, nitwit.🤭 In conclusion, I am posting this to the community known as "R/Wooooosh" to claim my internet points in your embarrassment 😏. Imbecile. The Germans refer to this action as "Schadenfreude," which means "harm-joy" 😬😲. WOW! 🤪 Another reference I had to explain to you. 🤦️🤭 I am going to cease this conversation for I do not converse with simple minded persons.😏😂`).then((msg)=>{
   setTimeout(function(){
     msg.delete();
   }, 30000)
 })
 }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}serverinfo`)) {
 const guild = client.guilds.cache
 var serverIcon = message.guild.iconURL();
 const infoEmbed = new Discord.MessageEmbed()
 .setColor(`RANDOM`)
 .setThumbnail(serverIcon)
 .setAuthor(`Guild information for ${message.guild.name}`,serverIcon)
 .setDescription(`
 ❯❯ NAME: ${message.guild.name} ❮❮
 ❯❯ ID: ${message.guild.id} ❮❮
 ❯❯ OWNER: ${message.guild.owner} (${message.guild.owner.id}) ❮❮
 ❯❯ REGION: ${message.guild.region} ❮❮
 ❯❯ BOOST TIER: ${message.guild.premiumTier} ❮❮
 ❯❯ EXPLICIT FILTER: ${message.guild.explicitContentFilter} ❮❮
 ❯❯ CREATION DATE: ${message.guild.createdAt} ❮❮
 ❯❯ PARTNERED?: ${message.guild.partnered} ❮❮
 ❯❯ VERIFIED?: ${message.guild.verified} ❮❮
 
 ❯❯ BOOST COUNT: ${message.guild.premiumSubscriptionCount} ❮❮
 ❯❯ ROLE COUNT: ${message.guild.roles.cache.size} ❮❮
 ❯❯ EMOJI COUNT: ${message.guild.emojis.cache.size} ❮❮
 ❯❯ MEMBER COUNT (without bots): ${message.guild.members.cache.filter(member => !member.user.bot).size} ❮❮
 ❯❯ (total) MEMBER COUNT: ${message.guild.members.cache.size} ❮❮
 ❯❯ BOT COUNT: ${message.guild.members.cache.filter(member => member.user.bot).size} ❮❮
 ❯❯ AFK CHANNEL: <#${message.guild.afkChannelID}>  ❮❮
 ❯❯ AFK TIMEOUT: ${message.guild.afkTimeout} ❮❮
 
 
 ❯❯ CHANNELS: Please use ${guildPrefix}channels to see all of your servers channels. If your server has over ~80 channels, it will not send. ❮❮
 ❯❯ ROLES: Please use ${guildPrefix}roles to see all of your servers roles. If your server has over ~80 roles, it will not be able to send! ❮❮
 ❯❯ EMOJIS: Please use ${guildPrefix}emojis. ❮❮
 `)
 .setFooter("​","https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif")
 message.channel.send(infoEmbed)
} //  ❯❯ ❮❮
if (message.content.toLowerCase().startsWith(`${guildPrefix}channels`)) {
  const guild = client.guilds.cache
  var serverIcon = message.guild.iconURL();
  const infEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setThumbnail(serverIcon)
  .setAuthor(`Channels for ${message.guild.name}`,serverIcon)
  .setDescription(message.guild.channels.cache.map(channel => `<#${channel.id}>`))
  .setFooter(`note: Channels are in no order, and, categories and voice channels do show up.`)
  message.channel.send(infEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}emojis`)) {
  const guild = client.guilds.cache
  var serverIcon = message.guild.iconURL();
  const infEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setThumbnail(serverIcon)
  .setAuthor(`Emojis for ${message.guild.name}`,serverIcon)
  .setDescription(message.guild.emojis.cache.map(emoji => `[:${emoji.name}:]`))
  message.channel.send(infEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}roles`)) {
  const guild = client.guilds.cache
  var serverIcon = message.guild.iconURL();
  const infEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setThumbnail(serverIcon) 
  .setAuthor(`Roles for ${message.guild.name}`,serverIcon)
  .setDescription(message.guild.roles.cache.map(role => `<@&${role.id}>`))
  message.channel.send(infEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}send`)) {
  const channel = client.channels.cache.get(message.channel.id);
  channel.createWebhook(`${message.author.username}`, {
    avatar: "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif",
  })
  .then(webhook => console.log(`Created webhook ${webhook}`))
  .catch(console.error);
  const webhooks = await channel.fetchWebhooks();
  const webhook = webhooks.first();
  const embed = new Discord.MessageEmbed()
  .setDescription(message.content.substring(guildPrefix.length+"send".length))
  .setColor(`RANDOM`)
  .setFooter(`​`,"https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif")
  await webhook.send(``, { // this is plain text
    username: `${message.author.username}`,
    avatarURL: "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif",
    embeds: [embed]
  }).then(message.delete())
}
/*
webhook.edit({
    name: `${message.author.username}`,
    avatarURL: "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif",
    channel: message.channel.id
  })
*/
if (message.content.toLowerCase().startsWith(`${guildPrefix}roll me`)) {
       if (message.member.voice.channel) {
         const connection = await message.member.voice.channel.join();
         const dispatcher = connection.play('https://crashbot.ml/audio/rickrolled.mp3', {
           volume: 0.3,
         });
       } else {
          const errEmbed = new Discord.MessageEmbed()
          .setTitle('Error!')
          .setDescription('Sorry, you\'re not in a voice channel and cannot perform this command.')
          .setFooter(`Bleep Bloop join a vc <3`)
          .setColor(`RANDOM`)
          message.channel.send(errEmbed)
       }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}dog`)) {
  var tt = await redditImageFetcher.fetch({
    type: 'custom',
    total: 1,
    subreddit: ['dogs','dog','goldenretrievers','germanshepards','germanshepard','puppy','puppies','puppysmiles','rarepuppers','woof_irl','zoomies']
  });
  if (tt[0].NSFW && !message.channel.nsfw) {
      const errEmbed = new Discord.MessageEmbed()
      .setColor(`0x#8B0000`)
      .setTitle('WOAH WOAH WOAH')
      .setDescription('The post found was marked as nsfw, please try this again in a NSFW channel if you\'re attempting to do this on an NSFW subreddit, if it isn\'t, run this command again. ')
      message.channel.send(errEmbed)
  } else {
  const dogEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setTitle(`${tt[0].title}`)
  .setURL(`${tt[0].postLink}`)
  .setImage(tt[0].image)
  .setFooter(`from r/${tt[0].subreddit} || ${tt[0].upvotes} upvotes`)
  message.channel.send(dogEmbed)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}cat`)) {
  var tt = await redditImageFetcher.fetch({
    type: 'custom',
    total: 1,
    subreddit: ['cat','cats','kitty','kittens','catsareliquid','meow_irl','sadcats','catsbeingcats','Kitty_Cult']
  });
  if (tt[0].NSFW && !message.channel.nsfw) {
      const errEmbed = new Discord.MessageEmbed()
      .setColor(`0x#8B0000`)
      .setTitle('WOAH WOAH WOAH')
      .setDescription('The post found was marked as nsfw, please try this again in a NSFW channel if you\'re attempting to do this on an NSFW subreddit, if it isn\'t, run this command again. ')
      message.channel.send(errEmbed)
  } else {
    const catEmbed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`${tt[0].title}`)
    .setURL(`${tt[0].postLink}`)
    .setImage(tt[0].image)
    .setFooter(`from r/${tt[0].subreddit} || ${tt[0].upvotes} upvotes`)
    message.channel.send(catEmbed)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}animal`)) {
  var tt = await redditImageFetcher.fetch({
    type: 'custom',
    total: 1,
    subreddit: ['animalsbeingbros','animalsbeingconfused','animalsbeingderps','animalsbeingjerks','animalsbeingsleepy','aww','awww','awwww','bigboye','cats','dogs','kitty','kittens','catsareliquid','meow_irl','sadcats','dogs','dog','goldenretrievers','germanshepards','germanshepard','puppy','puppies','puppysmiles','rarepuppers','woof_irl','zoomies','catsbeingcats','cutestofthemall','eyebleach','animals']
  });
  if (tt[0].NSFW && !message.channel.nsfw) {
      const errEmbed = new Discord.MessageEmbed()
      .setColor(`0x#8B0000`)
      .setTitle('WOAH WOAH WOAH')
      .setDescription('The post found was marked as nsfw, please try this again in a NSFW channel if you\'re attempting to do this on an NSFW subreddit, if it isn\'t, run this command again. ')
      message.channel.send(errEmbed)
  } else {
  const aniEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setTitle(`${tt[0].title}`)
  .setURL(`${tt[0].postLink}`)
  .setImage(tt[0].image)
  .setFooter(`from r/${tt[0].subreddit} || ${tt[0].upvotes} upvotes`)
  message.channel.send(aniEmbed)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}reddit`)) {
  var args = message.content.split(' ').slice(1);
  var tt = await redditImageFetcher.fetch({
    type: 'custom',
    total: 1,
    subreddit: [`${args[0]}`]
  });
  if (tt[0].NSFW && !message.channel.nsfw) {
    const errEmbed = new Discord.MessageEmbed()
    .setColor(`0x#8B0000`)
    .setTitle('WOAH WOAH WOAH')
    .setDescription('The post found was marked as nsfw, please try this again in a NSFW channel if you\'re attempting to do this on an NSFW subreddit, if it isn\'t, run this command again. ')
    message.channel.send(errEmbed)
  } else {
  const redEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setTitle(`${tt[0].title}`)
  .setURL(`${tt[0].postLink}`)
  .setImage(tt[0].image)
  .setFooter(`from r/${tt[0].subreddit} || ${tt[0].upvotes} upvotes`)
  message.channel.send(redEmbed)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}meme`)){
    var tt = await redditImageFetcher.fetch({
    type: 'custom',
    total: 1,
    subreddit:['memes','meme','deepfriedmemes','surrealmemes','nukedmemes','bonehurtingjuice','dankmemes','me_irl','meirl','i_irl','memeeconomy','bikinibottomtwitter','trippinthroughtime','whitepeopletwitter','blackpeopletwitter','boottoobig','historymemes','musicmemes','starterpacks','wholesomememes','onlywholesomememes','funny','comedyheaven','okbuddyretard','dogelore']
    });
    if (tt[0].NSFW && !message.channel.nsfw) {
      const errEmbed = new Discord.MessageEmbed()
      .setColor(`0x#8B0000`)
      .setTitle('WOAH WOAH WOAH')
      .setDescription('The post found was marked as nsfw, please try this again in a NSFW channel if you\'re attempting to do this on an NSFW subreddit, if it isn\'t, run this command again. ')
      message.channel.send(errEmbed)
  } else {
    const memeEmbed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${tt[0].title}`)
      .setURL(`${tt[0].postLink}`)
      .setImage(tt[0].image)
      .setFooter(`from r/${tt[0].subreddit} || ${tt[0].upvotes} upvotes`)
      message.channel.send(memeEmbed)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}embed`)) {
  if (message.author.id === "514268920627331082") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`[source](https://www.reddit.com/r/comedyheaven/comments/miulf6/bees/)`)
    message.channel.send(embed).then(message.delete());;
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}rules`)) {
  if (message.guild.id === "809668618597826632") {
    if (message.author.id === "514268920627331082") {
      const ruleEmbed = new Discord.MessageEmbed()
      .setAuthor(`Rules for Bot Central! Please read carefully.`,"https://cdn.discordapp.com/attachments/822930845584064562/824426778655195147/BC_Animated.gif")
      .setThumbnail('https://cdn.discordapp.com/attachments/822930845584064562/824426778655195147/BC_Animated.gif')
      .setDescription(`
      1. Be respectful
  You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.

  2. No slurs or harmful names
  Derogatory language to any users will result in an immediate ban. Everybody is welcome here, and we'd like to keep it that way. Your name will be changed as soon as we notice it, and you will be required to make a ticket by reacting in <#822965076180598784>, or by going to a bot commands channel and running "/open <reason>"

  3. No spamming
  Don't send a lot of small messages right after each other. Do not disrupt chat by spamming.

  4. No pornographic/adult/other NSFW material outside of adult channels
  To get access to the adult channels, react to the respective message in <#822945311608930414>. If we become suspicious we may ask for proof of age. If you are found to be underage and in the adult channels you will be banned immediately.

  5. No advertisements outside of <#822930968708382763>
  No NSFW advertisements permitted. Discord server links are allowed, but only with previous mod discretion. Please DM a mod to ask if you can post your server invite.

  **6. No offensive names and profile pictures**
  You will be asked to change your name or picture if the staff deems them inappropriate.

  **7. Server Raiding**
  Raiding or mentions of raiding are not allowed.

  \*\*8. Direct & Indirect Threats\*\*
  Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.
  `)
  .setFooter("​","https://cdn.discordapp.com/attachments/822930845584064562/824426778655195147/BC_Animated.gif")
  const ruleEmbed2 = new Discord.MessageEmbed()
  .setDescription(`
  \*\*9. Follow the Discord Community Guidelines\*\*
  As we\'re aiming to become partnered, the rules you **MUST** follow can be found at the below links.
  [ToS](https://discord.com/terms) [Guidelines](https://discord.com/guidelines) (This one not so much, but it might be helpful to read.) [Partner ToS](https://support.discord.com/hc/en-us/articles/360024871991)

  \*\*10. No alt accounts.\*\* This is to prevent certain kinds of abuse, some related to rule number 7.
  **A note**:
  Tickets are for direct contact with moderators. Issues you have should go in a ticket instead of directly messaging an Admin or Moderator. If you create a ticket for **NO** reason, you will be warned, as it is annoying to go through a completely empty ticket.
  `)
  .setFooter("​","https://cdn.discordapp.com/attachments/822930845584064562/824426778655195147/BC_Animated.gif")
  message.channel.send(ruleEmbed)
  message.channel.send(ruleEmbed2)
    }
  }
  message.delete();
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}vote`)) {
    const voteEmbed = new Discord.MessageEmbed()
    .setColor('#0x855fb1')
    .setAuthor(`Vote for our server!`)
    .setDescription(`Wanna vote? Below are the links to vote for me on two platforms, and, voting for our discord server!
    [Top.gg](https://vote.choosethis.org) | [Discord Bot List](https://discordbotlist.com/bots/choosebot) | [Server](https://disc.choosethis.org)   `)
    .setFooter(`While you have this role, you get access to exclusive giveaways!`,"https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif")
    .setThumbnail(`https://cdn.discordapp.com/attachments/822930845584064562/823291811212558416/BC_Animated.gif`)
    message.delete();
    message.channel.send(voteEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}8ball `)) {
  var responses = [`Yeah`,`Sure`,`Wtf? no`,`nahh`,`yeah for sure`,`definitely yes `,`no?? why??`]
  var response = responses[Math.floor(Math.random() * responses.length)];
  const ballEmbed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}\'s question`,"https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".gif")
  .setDescription(`${message.author.tag} asks: ${message.content.substring(guildPrefix.length+"8ball".length)}`)
  message.channel.send(ballEmbed)
  message.channel.send(response)
  message.delete();
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}prefix`)) {
  let perms = message.channel.permissionsFor(message.member);
  let canManageServer = message.channel.permissionsFor(message.member).has("MANAGE_GUILD", false);
  if (canManageServer) {
    var args = message.content.split(' ').slice(1);
    prefix.setPrefix(args[0], message.guild.id)
    message.channel.send(`Okay! I set the prefix to \`${args[0]}\` in ${message.guild.name}. \n(Note: If this command is conflicting with another bot, please use "<@!816457112804261908>prefix" to set it!)`)
    .catch(console.error)
    if(message.guild.id === "809668618597826632") {
      message.guild.me.setNickname(`[ ${args[0]} ] ChooseBot`);
    }
  } else {
    message.channel.send(`Sorry <@${message.author.id}>, you do not have the \`MANAGE_GUILD\`permission and cannot change my prefix.`)
  }
}
if (message.content.toLowerCase().startsWith(`<@!816457112804261908>prefix`)) {
  let perms = message.channel.permissionsFor(message.member);
  let canManageServer = message.channel.permissionsFor(message.member).has("MANAGE_GUILD", false);
  if (canManageServer) {
    var args = message.content.split(' ').slice(1);
    prefix.setPrefix(args[0], message.guild.id)
    message.channel.send(`Okay! I set the prefix to \`${args[0]}\` in ${message.guild.name}.`)
    if(message.guild.id === "809668618597826632") {
      message.guild.me.setNickname(`[ ${args[0]} ] ChooseBot`);
    }
  } else {
    message.channel.send(`Sorry <@${message.author.id}>, you do not have the \`MANAGE_GUILD\` permission and cannot change my prefix.`)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}kick`)) {
  if (message.member.hasPermission(`KICK_MEMBERS`)) {
    var member = message.mentions.members.first();
    var reason = message.content.substring(guildPrefix.length+"kick".length+24)
    member.kick({reason: `Kick reason not currently supported. Please check with the person who ran the command for the reason!`}).then((member) => {
      message.channel.send(`${member} has been kicked from ${message.guild.name} for "${reason}".`)
    });
  } else {
    message.channel.send(`${message.author.tag}, you do not have the \`KICK_MEMBERS\` permission and cannot perform this action.`)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}ban`)) {
  if (message.member.hasPermission(`BAN_MEMBERS`)) {
    var member = message.mentions.members.first();
    var reason = message.content.substring(guildPrefix.length+"ban".length+24)
    member.ban({reason: `${reason}`}).then((member) => {
      message.channel.send(`${member} has been banned from ${message.guild.name} for "${reason}".`)
    });
  } else {
    message.channel.send(`${message.author.tag}, you do not have the \`BAN_MEMBERS\` permission and cannot perform this action.`)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}unban`)) {
  if (message.member.hasPermission(`BAN_MEMBERS`)) {
    var member = message.mentions.members.first();
    var reason = message.content.substring(guildPrefix.length+"unban".length+24)
    member.unban({reason: `${reason}`}).then((member) => {
      message.channel.send(`${member} has been unbanned from ${message.guild.name} for "${reason}".`)
    });
  } else {
    message.channel.send(`${message.author.tag}, you do not have the \`BAN_MEMBERS\` permission and cannot perform this action.`)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}slowmode`)) {
  let canManageChannel = message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS", false)
  if (canManageChannel) {
    var args = message.content.split(' ').slice(1); 
    message.channel.setRateLimitPerUser(args[0], `Slowmode set to ${args[0]} by ${message.author.username}` )
    message.channel.send(`Set the slowmode to \`${args[0]}s\` by ${message.author.username}!`)
  } else if (!canManageChannel) {
    message.channel.send(`oops! <@${message.author.id}> ,you don\'t have the \`MANAGE_CHANNELS\` permission!`)
  }
  message.delete();
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}website`)) {
  const webEmbed = new Discord.MessageEmbed()
  .setTitle(`Wanna check my website out?`)
  .setDescription(`If you\'d like to, go to [choosethis.org](https://choosethis.org/)! That links to the homepage, but, if you go [here](https://choosethis.org/choosebot), you\'ll find my page!`)
  .setFooter(`thank u`)
  .setColor(`RANDOM`)
  message.channel.send(webEmbed)     
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}ts`)) {// for cadenza
  fs.readFile("ts.txt", function (err, data) { // ts.txt is attached. it is just a bunch of youtube links. if you'd like, you can replace all the links, or, you can just delete this command
    if (err) {
      throw err;
    }
    const _links = data.toString().split("\n");
    var _link = _links[Math.floor(Math.random() * _links.length)];
  message.channel.send(`Here is an amazing Taylor Swift song you should listen to! ${_link}`)
  })
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}purge`)) {
  let canManageMessages = message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES", false);
  if (canManageMessages) {
    var args = message.content.split(' ').slice(1);
    if (parseInt(args[0]) < 100 ) {
      message.channel.bulkDelete(args[0]).then(message.channel.send(`\`${args[0]}\` messages purged by ${message.author.tag}!`))
    } else if (parseInt(args[0]) > 100) {
      message.channel.send(`ooooops! I cannot purge more than 100 messages at once.`)
    }
  } else if (!canManageMessages) {
    message.channel.send(`Ooops! You don\'t have the \`MANAGE_MESSAGES\` permission and cannot do this.`)
  }
}
// if (message.channel.id === "826702645116010526") {
//   message.channel.send(`WAAAAA`)
// } 
if (message.content.toLowerCase().startsWith(`${guildPrefix}rename`)) {
  let canManageChannels = message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS", false);
  if (canManageChannels) {
    var args = message.content.split(' ').slice(1);
    if (parseInt(args[0]).length > 100) {
      message.channel.send(`oops! I cannot rename this channel. The maximum character limit for channel names is 100 characters!`)
    } else {
      message.channel.setName(`${args[0]}`)
      message.channel.send(`${message.author.tag} set the channel name to ${args[0]}!`)
    }
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}userinfo`)) {
  const users = message.mentions.users.first() || message.author
  const member = message.mentions.members.first() || message.member;
      const uEmbed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setAuthor(`Userinfo for ${users.tag}!`)
      .setThumbnail(users.displayAvatarURL())
      .setDescription(`
      Username: ${users.username} Tag: #${users.discriminator}
      Bot: ${users.bot} 
      Creation Date: ${users.createdAt}
      Nickname: ${member.nickname} 
      Flags: ${users.flags.toArray()} || [[Avatar URL]](${users.displayAvatarURL()}) 
      ID: ${users.id}`)
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(uEmbed);
      }, 3500);
      message.channel.stopTyping();
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}pin `)) {
  if (message.author.id === "514268920627331082") {
    message.pin().then(pin => {
      message.unpin().then(`bruh`)
    })
  }
}
if (message.content.toLowerCase().includes(`yeah yeah`)) {
  if (!message.author.bot) {
    if (message.guild.id === "809668618597826632") {
      message.channel.send (`(dababy) less goo`)
      message.react("826742690414198814")
      message.react("826743579984658454")
    }
  }
}
if (message.content.toLowerCase().includes(`(dababy)`)) {
  if (!message.author.bot) {
    if (message.guild.id === "809668618597826632") {
      message.channel.send(`yeah yeah (less goo)`)
      message.react("826743579984658454")
      message.react("826742690414198814")
    }
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}name`)) {
  if (message.author.id === "514268920627331082") {
    var args = message.content.split('/').slice(1);
    message.guild.setName(args[0])
    message.channel.send(`ok idk why you wanna do this but the new server name is \`${args[0]}\``)
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}reply`)) {
    client.api.channels[message.channel.id].messages.post({
    data: {
        message_reference: { message_id: message.id },
        content: "This is a message reply.",
        allowed_mentions: {replied_user: true }
    }
    })
      message.react("826742690414198814")
      message.react("826743579984658454") 
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}servercount`)) {
  message.channel.send(`I\'m in ${client.guilds.cache.size} servers!`)
  client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} | ${guild.id} | ${guild.members.cache.size}`); //hi crash
  })
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}addemoji`)) {
        var args = message.content.split(' ').slice(1);
        if (!message.guild.me.hasPermission(`MANAGE_EMOJIS`)) {
          message.channel.send(`oops! I'm missing the \`MANAGE_EMOJIS\` permission :(`)
        }
        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
          message.channel.send("You don't have permissions to add emojis!");
        }
        else if (message.member.hasPermission(`MANAGE_EMOJIS`)){
                try{
                    await message.guild.emojis.create(`${args[0]}`, `${args[1]}`)
                    message.channel.send(`Succesfully added your emoji ":${args[1]}:"!`)
                } catch (error) {
                    console.error(error);
                    message.channel.send(`Oops! I couldn't add your emoji. Possible errors: The name was over 32 characters in length | The file size of the image was above 256KB. | Your server doesn't have enough space for emojis.`).catch(console.error);
                }
        }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}help`)) {
  const helpEmbed = new Discord.MessageEmbed()
  .setColor('#0xff0000')
  .setAuthor('Need help?')
  .setTitle(`These are my command categories. All commands start with "${guildPrefix}"`)
  .setDescription(`\`\`\`yml
  ${guildPrefix}moderation - Moderation commands
  ${guildPrefix}fun - Fun commands
  ${guildPrefix}misc - Misc commands
  ${guildPrefix}help - This embed
  \`\`\`
  `)
  .setFooter("Bleep Bloop hi I'm choosebot")
  message.channel.send(helpEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}moderation`)) {
  const modEmbed = new Discord.MessageEmbed()
  .setColor(`#0xff0000`)
  .setAuthor(`Need help? These are my moderation commands.`)
  .setTitle(`\`[] = Optional <> = Required\``)
  .setDescription(`\`\`\`fix
  Prefix <New Prefix> - Change the bot\'s prefix.
  Kick <@User> [Reason] - Kick a user.
  Ban <@User> [Reason] - Ban a user.
  Slowmode <time (in seconds)> - Set a channels slowmode.
  Name <New Name> - Change the guild name. (Command usage is weird, should look like this: "${guildPrefix}name / A cool Guild Name")
  Rename <New Channel Name> - Rename a channel. Note: spaces cannot be used. use "-" in place of a space.
  Purge <amount> - Purge a specified amount of messages in a channel (up to 100).
  Addemoji <image url> <emoji name> - Add an emoji to your server.
  \`\`\``)
  message.channel.send(modEmbed)
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}fun`)) {
  const funEmbed = new Discord.MessageEmbed()
  .setColor(`#0xff0000`)
  .setAuthor(`Need help? These are my fun commands.`)
  .setTitle(`\`[] = Optional <> = Required\``)
  .setDescription(`\`\`\`yml
  Meme - Sends a random meme.
  8ball <question> - Ask the magic 8ball a question and it will answer!
  IP [@user] - Sends someones (or the message authors) ｆａｋｅ ip.
  \`\`\``)
  message.channel.send(funEmbed)
}
if (message.guild.id === "809668618597826632") {
  let canManageServer = message.channel.permissionsFor(message.member).has("MANAGE_GUILD", false);
  if (!canManageServer) {
    if (message.content.includes(`discord.gg`)) {
      message.delete().then(message.channel.send(`bruh <@${message.author.id}> just posted an invite link, how cringe.`))
    }
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}attach`)) {
  if (message.guild.id === "809668618597826632") {
    var args = message.content.split(' ').slice(1);
    let image = args[0]
    let attach = new Discord.MessageAttachment(`${args[0]}`)
    message.channel.send(attach).catch(console.error)
  }
  message.delete();
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}say`)) {
  const channel = message.mentions.channels.first()
  var args = message.content.split('||').slice(1);
  const bruhEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setTitle(`Message sent from #${message.channel.name}.`)
  .setDescription(`${args[0]}`)
  .setTimestamp()
  .setFooter(`Sent by ${message.author.tag}`)
  channel.send(bruhEmbed).then(message.delete());
}
if (message.content !== "") { // Message content "" just means it is an uncaptioned image.
  if (message.channel.id === "828097106400641065") {
    message.delete()
    message.channel.send(`Haha lmao <@${message.author.id}> just tried to send something in <#${message.channel.id}> how stupid. Don\'t they know this is an image only channel? What an idiot.`).then((msg) => {
      setTimeout(function() {
        msg.delete();
      }, 12000)
    })
  }
}
if (message.content.toLowerCase().startsWith(`${guildPrefix}misc`)) {
  const miscEmbed = new Discord.MessageEmbed()
  .setColor(`#0xff0000`)
  .setAuthor(`Need help? These are my misc commands.`)
  .setTitle(`\`[] = Optional <> = Required\``)
  .setDescription(`\`\`\`fix
    Ping - Shows the bot\'s latency.    
  Suggest <Suggestion> - Send a suggestion for a command for the bot.
  Report <Report> - Send a report for an issue with the bot.
  Invite - Sends the invite link to invite me to your server.
  Serverinfo - Sends information about the guild the user is currently in.
  Roles - Sends all of the roles for the server you\'re currently in.
  Send <content> - Sends a message using a webhook, looking like the user.
  Roll me - Joins the user\'s voice channel and plays Never Gonna Give you Up.
  Dog - Sends a random dog image from reddit.
  Cat - Sends a random cat image from reddit.
  Animal - Sends a random animal image from reddit.
  Vote - Sends information to vote for me on Top.gg.
  Website - Sends the website for this bot.
  Ts -  Sends a random Taylor Swift song that you should listen to!
  UserInfo [@user] - Sends information about a user mentioned, or the message Author.
  ServerCount - Sends the count of servers I'm in.
  Reddit <subreddit> - Sends a random post from a provided subreddit.
  Emojis - Sends all of the servers emojis
  Channels - Sends all of the servers channels
  \`\`\``)
  message.channel.send(miscEmbed)
}
}}) // complete end of code
client.login(process.env.TOKEN); // You will want to make a file named ".env" and put "TOKEN= <your bot token>", OR, you can just put your token in the code. Like this, "client.login(<your token here>)."
