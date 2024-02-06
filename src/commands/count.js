const { SlashCommandBuilder } = require('discord.js')
const mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "miya"
});


async function queries(id, username, discriminator) {
  const verify = `SELECT * FROM users WHERE user_id = ${id};`;
  const sql = `INSERT INTO users (user_id, username, discriminator, count) VALUES ('${id}', '${username}', '${discriminator}', '1');`;
  const sql_select = `SELECT count FROM users WHERE user_id = ${id}`;

  try {
    const resultVerify = await new Promise((resolve, reject) => {
      db.query(verify, (err, result) => {
        if (err) {
          console.log("internal error", err);
          reject(err);
        }
        resolve(result);
      });
    });

    if (resultVerify.length === 0) {
      await new Promise((resolve, reject) => {
        db.query(sql, (err) => {
          if (err) {
            console.log("internal error", err);
            reject(err);
          }
          resolve();
        });
      });
    } else {
      await new Promise((resolve, reject) => {
        db.query(
          `UPDATE users SET count = count + 1 WHERE user_id = '${id}'`,
          (err) => {
            if (err) {
              console.log("internal error", err);
              reject(err);
            }
            resolve();
          }
        );
      });
    }

    const resultCount = await new Promise((resolve, reject) => {
      db.query(sql_select, (err, result) => {
        if (err) {
          console.log("internal error", err);
          reject(err);
        }
        resolve(result);
      });
    });

    return resultCount;

  } catch (error) {
    console.error("Error executing queries:", error);
  }
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('count')
    .setDescription('Replies a count of a random thing'),
    
    async execute(interaction) {
        
        const { id, username, discriminator } = interaction?.user

        const result = await queries(id, username, discriminator)      
       
        await interaction.reply(`Todo dia isso ${interaction.user}.\nCount: ${result[0].count} vezes.`);
    },
};
