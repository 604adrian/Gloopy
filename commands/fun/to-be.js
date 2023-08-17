const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('to-be')
		.setDescription('🎭 Get dramatic'),
	async execute(interaction) {
		return interaction.reply('or not to be');
	},
};
