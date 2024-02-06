const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('replies with play'),
    async  execute(interaction) {
        await interaction.reply('Play uwu')
    },
};