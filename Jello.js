import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js"; 

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent 
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // setInterval(sendRandomMessage, 1000)
});

// Jello.
client.on('messageCreate', (message) => {
    if (message.author.bot) return; 

    if (message.content.toLowerCase() === "jello.") { 
        if (Math.random() < 0.1) { 
            message.channel.send('𝓙𝓮𝓵𝓵𝓸 𝓫𝓻𝓸. :heart:');
        } else {
            message.channel.send('Jello.'); 
        }
        if (Math.random() < 0.01) {
            message.channel.send('𝓙𝓮𝓵𝓵𝓸 𝓫𝓻𝓸. :heart: :tongue:')
        }
    }

    if (message.content.includes("წავიკითხე")) {
        message.channel.send("dis nigga so unfunny bro")
    }
});
client.login(process.env.DISCORD_TOKEN);
