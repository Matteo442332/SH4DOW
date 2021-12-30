const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => { 
    console.log('Bot pret.');
});

client.on('guildMemberAdd', (member) => {
  let welcomeChannel = client.channels.cache.get('925930972480937994');
  
  welcomeChannel.send('Welcome https://s10.gifyu.com/images/welcomedccf0121ed265431.md.gif, ' +member.user.tag + ' !');

  member.roles.add('911669597235712000');

  member.send('welcome to our cook group I hope you will like it and if you have any question you can contact me by discord: EKIP⁶₆⁷ # 3134');
});

client.on('guidMemberRemove', (member) => {
});

client.login('OTI1OTI3Mzk0ODczODUxOTI0.Yc0PFQ.4ol0uVvrDxEiWKwZLHcc3l4NtVI');
