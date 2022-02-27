const Discord = require('discord.js');
const Client = new Discord.Client();
const config = require('./config.js');

//DÉVELOPPEMENT//

Client.on("ready", () => {
    console.log("bot opérationel");
    Client.user.setStatus("dnd")
    const statuses = [
        () => `Version Du Bot 1.0`,
    ]
    let i = 0 
    setInterval(() => {
        Client.user.setActivity(statuses[i](), {type: 'WATCHING'});
        i = ++i % statuses.length
    }, 1e4    

    )
});

// On créé un nouveau message d'arrivé,

// Channel id : 946406034652663863
// Rôle id : 947162847534788689

Client.on('guildMemberAdd', (member) => {
    let welcomeChannel = Client.channels.get(config.welcommeChannel);
    welcomeChannel.send("Bienvenue, " + member.user + " sur le serveur !"); // tag == User#1234
    member.send('Ceci est un message privé !');
});

// On créé un nouveau message de départ,

// Channel id : 946406034652663863

Client.on('guildMemberRemove', (member) => {
    let leaveChannel = Client.channels.get(config.leaveChannel);
    leaveChannel.send("Aurevoir, " + member.user + " merci d'être passé sur le serveur !"); // tag == User#1234
});

//[TOKEN]//[NE PAS TOUCHER]//
Client.login(config.token);