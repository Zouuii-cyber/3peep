const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMembers]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === "approve_request") {
        await interaction.reply({ content: "✅ Request Approved!", ephemeral: true });
    } else if (interaction.customId === "decline_request") {
        await interaction.reply({ content: "❌ Request Declined.", ephemeral: true });
    }
});

// Login with your bot token
client.login(process.env.BOT_TOKEN);