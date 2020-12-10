const Discord = require('discord.js');

const client = new Discord.Client();

const {
	prefix,
	token,
} = require('./config.json');



client.once('ready', () => {
    console.log('Veribot is online!')
})




client.login(token);