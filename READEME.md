You must create a config.json file in the miya directory
{
	"globalPrefix": "*",
	"token": "your_token_here",
	"clientId": "your_client_id_here",
	"guildId": "your_discord_id_here"
}

clientId: Your application's client id
guildId: Your development server's id

commands: An array of commands to register. The slash command builder from discord.js is used to build the data for your commands

node deploy-commands
node create_db
node create_table
node index (to start the application)

