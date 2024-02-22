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

    if (message.content.toLowerCase() === "წავიკითხე") {
        message.channel.send("shut up nigga")
    }
});

// TODO: dont kms

// lore and uhhhh retard lisekuu idk

// function sendRandomMessage() {
//     const specialResponseChance = 0.5;
//     const specialResponse = "https://media.discordapp.net/attachments/1169451854820802704/1205662088429830244/caption.gif?ex=65e269d2&is=65cff4d2&hm=8b4329dfaffca920d618ad679fa98c4c62377513e35f964a651eceee72d61907&";

//     if (Math.random() < specialResponseChance) {
//         let mostActiveChannel = findMostActiveChannel();

//         if (mostActiveChannel) {
//             mostActiveChannel.send(specialResponse);
//         }
//     }
// }


// function findMostActiveChannel() {
//     let mostActive = null;
//     let highestCount = 0;

//     client.channels.cache.forEach(channel => {
//         if (channel.type === 'GUILD_TEXT' && channel.messages.cache.size >= messageCountThreshold) {
//             let count = channel.messages.cache.filter(message => message.createdTimestamp > Date.now() - checkInterval).size;

//             console.log(`Channel: ${channel.name}, Count: ${count}`); // Log channel details for debugging

//             if (count > highestCount) {
//                 highestCount = count;
//                 mostActive = channel;
//             }
//         }
//     });

//     console.log(`Most Active Channel: ${mostActive ? mostActive.name : 'None'}`); // Log the mostActive channel for debugging

//     return mostActive;
// }


client.login(process.env.DISCORD_TOKEN);
