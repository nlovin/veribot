const Discord = require('discord.js');

const client = new Discord.Client();

const {
	prefix,
	token,
} = require('./config.json');

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Veribot is online!')
});

client.on('guildMemberAdd', member => {
    member.roles.add(`774909359921823768`); //snowflake id, "Commoner" role: 774909359921823768
});

/*
client.on('guildMemberAdd', member => {
    member.roles.add(`787072317493608488`); //snowflake id, "Astral Sea" role: 787072317493608488
});
*/

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command == 'pizza'){
        client.commands.get('pizza').execute(message, args);
    }
});


client.login(token); //need to add a config.json with prefix and token names