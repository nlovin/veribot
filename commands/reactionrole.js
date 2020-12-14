module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

        if(message.member.roles.cache.has('349640672237715468')){
        const channel = '785974757190402078';
        const AmongUsRole = message.guild.roles.cache.find(role => role.name === "sus AF");
        const PlaneswalkerRole = message.guild.roles.cache.find(role => role.name === "Planeswalkers");
 
        const amongUsEmoji = '761749524632698890';
        const planeswalkerEmoji = '681520132572708927';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose your roles')
            .setDescription('Choosing your roles here will let others ping you when they\'re looking for a match!\n\n'
                + `${amongUsEmoji} for AmongUs\n`
                + `${planeswalkerEmoji} for Magic the Gathering`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(amongUsEmoji);
        messageEmbed.react(planeswalkerEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === amongUsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AmongUsRole);
                }
                if (reaction.emoji.name === planeswalkerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(PlaneswalkerRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === amongUsEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AmongUsRole);
                }
                if (reaction.emoji.name === planeswalkerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PlaneswalkerRole);
                }
            } else {
                return;
            }
        });
    }
}
 
}   