const { SlashCommandBuilder } = require('discord.js');
const { AttachmentBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('us')
    .setDescription('Replies with a image of us'),
    
    async execute(interaction) {

        const folder = './src/assets/us';

        const images = []

        fs.readdirSync(folder).forEach(file => {
            images.push(file);
        });
        
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

        let file = new AttachmentBuilder(`${folder}/${[random(images)]}`);
        await interaction.reply({ files: [file] });
        
    },
};