const { SlashCommandBuilder } = require('discord.js')
const { AttachmentBuilder } = require('discord.js');
const fs = require('fs');

function getCouples(images) {

    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
    let couple1 = `${[random(images)]}`
    let couple2;

    if (couple1.includes('secundary', 0)) {

        couple2 = couple1

        let text = couple1.split("-secundary", 2);
        let concat = text[0].concat(text[1])

        couple1 = concat

        return [couple1, couple2];

    } else {

        let text = couple1.split(".", 2);
        let concat = text[0].concat("-secundary." + text[1])

        couple2 = concat

        return [couple1, couple2];
    }
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('couple')
    .setDescription('Replies with a cute couple!'),
    
    async execute(interaction) {
        
        const images = []
        const folder = './src/assets/couple';

        fs.readdirSync(folder).forEach(file => {
            images.push(file);
        });

        const [couple1, couple2] = getCouples(images)

        let file = new AttachmentBuilder(`${folder}/${couple1}`);
        let file2 = new AttachmentBuilder(`${folder}/${couple2}`);

        await interaction.reply({ files: [file, file2] });

    },
};

