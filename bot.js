// Calling Packages
const Discord = require('discord.js');
const bot = new Discord.Client();

// Global Settings
const prefix = '!'; // This is the prefix, you can change it to whatever you want.

// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.


    // Commands

    // Ping
    if (msg === prefix + 'ISABELLE') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('@everyone Hello mayors, especially speaking to our *new mayors* here. <:isabelle:500099823051997200>');
        message.channel.send('Make sure to *check out* our last <#500092230015516673>, if you want to participate in the **advent calendar** and/or the **secret santa event**!');
        message.channel.send('Well, that was everything I wanted to say. Looking forward to meet you in the *town hall*. Have a great day! <:flourish:500092309157838849>');

    }

    if (msg === prefix + 'NOOK') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('@everyone Hello mayors, especially speaking to our *new mayors* here. <:isabelle:500099823051997200>');
        message.channel.send('Make sure to *check out* our last <#500092230015516673>, if you want to participate in the **advent calendar** and/or the **secret santa event**!');
        message.channel.send('Well, that was everything I wanted to say. Looking forward to meet you in the *town hall*. Have a great day! <:flourish:500092309157838849>');

    }

});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
bot.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});


bot.login('NTEyNjkzMjAyNzY0MDM4MTQ0.Ds9OFA.GRVI6xNa6p-H9QNELYgou1Iz_H0');
