const Discord = require('discord.js');

const client = new Discord.Client();

const {
	prefix,
	token,
} = require('./config.json');


client.once('ready', () => {
    console.log('Veribot is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});


client.login(token);