const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('🏓 Replies with pong'),
	async execute(interaction) {
		return interaction.reply('pong');
	},
};


