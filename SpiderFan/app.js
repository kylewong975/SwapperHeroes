/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "3a48a19e-2660-41b6-bf0e-9361ebb7d183",
    appPassword: "IQfdeG7s:)tEC(!J",
    openIdMetadata: ""
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, "DefaultEndpointsProtocol=https;AccountName=spiderfan9279;AccountKey=lmnbj5GcE7p50EmvuT3G32ExXophsxM7xRbF7XhNzVfe+Ovf0n1jMxa5J0zQqhfx9Ms90tAkEdomCwigMFY3IQ==;");
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.
var bot = new builder.UniversalBot(connector, function (session, args) {
    session.send('You reached the default message handler. You said \'%s\'.', session.message.text);
});
bot.set('storage', tableStorage);

// Make sure you add code to validate these fields
var luisAppId = "48814261-5c2d-4067-9486-7aad347509ef";
var luisAPIKey = 	"abb660c90e9c4c8d8d0a7265ca9276c0";
var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v1/application?id=' + luisAppId + '&subscription-key=' + luisAPIKey;

// Main dialog with LUIS
// Create a recognizer that gets intents from LUIS + Add the recognizer to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);
bot.dialog('PurchaseDialog',
    (session, args) => {
        // Resolve and store any HomeAutomation.Device entity passed from LUIS.
        var intent = args.intent;
        var device = builder.EntityRecognizer.findEntity(intent.entities, 'Product');

        // Turn on a specific device if a device entity is detected by LUIS
        if (device) {
            session.send('Ok, looking on eBay for the Spider-Man %s.', device.entity);
            // Put your code here for calling the IoT web service that turns on a device
        } else {
            // Assuming turning on lights is the default
            session.send('What kind of Spider-Man fan gear do you want to buy?');
            // Put your code here for calling the IoT web service that turns on a device
        }
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
        new builder.HeroCard(session)
            .title("Children Christmas Party Boy Spiderman Costume Kids Superhero Cosplay Bodysuit")
            .subtitle("$15.88 Buy It Now")
            .text("")
            .images([builder.CardImage.create(session, 'https://i.ebayimg.com/images/g/Gg4AAOSwVLRafUZt/s-l400.jpg')])
            .buttons([
                builder.CardAction.imBack(session, "https://www.ebay.com/itm/Children-Christmas-Party-Boy-Spiderman-Costume-Kids-Superhero-Cosplay-Bodysuit/222830843579?epid=7014641429&hash=item33e1c0d6bb:m:mcCJ4USE3X-NRV1O_gHxxqw", "Buy")
            ]),
        new builder.HeroCard(session)
            .title("Christmas Party Boy Spiderman Kids Cosplay Costume Holiday Superhero Size 10-12")
            .subtitle("$15.56 Buy It Now")
            .text("")
            .images([builder.CardImage.create(session, 'https://i.ebayimg.com/images/g/iEQAAOSw9hdaGZ5i/s-l500.jpg')])
            .buttons([
                builder.CardAction.imBack(session, "https://www.ebay.com/itm/Christmas-Party-Boy-Spiderman-Kids-Cosplay-Costume-Holiday-Superhero-Size-10-12/202124840890?_trkparms=aid%3D555019%26algo%3DPL.BANDIT%26ao%3D1%26asc%3D20150817211709%26meid%3Dee0e4ff306fe41c995ddf707f80fba49%26pid%3D100506%26rk%3D1%26rkt%3D1%26%26itm%3D202124840890&_trksid=p2045573.c100506.m3226", "Buy")
            ]),
        new builder.HeroCard(session)
            .title("Amazing Spiderman Cosplay Costume with Mask Men Halloween Party Zentai Bodysuit")
            .subtitle("$34.90 Buy It Now")
            .text("")
            .images([builder.CardImage.create(session, 'https://i.ebayimg.com/images/g/0ugAAOSwc-tY6wc~/s-l400.jpg')])
            .buttons([
                builder.CardAction.imBack(session, "https://www.ebay.com/itm/Amazing-Spiderman-Cosplay-Costume-with-Mask-Men-Halloween-Party-Zentai-Bodysuit/182524231433?hash=item2a7f4abf09:m:mtQADkPYmp6kMCASgdqtcyA", "Buy")
            ])
    ]);
    session.send(msg).endDialog();
    }
).triggerAction({
    matches: 'Purchase'
})
bot.dialog('GreetingDialog',
    (session, args) => {
        var intent = args.intent;
        session.send("Hi there! I'm your friendly neighborhood Spider-Man!");
        session.endDialog();
    }
).triggerAction({
    matches: 'Hello'
})
bot.dialog('TechDialog',
    (session, args) => {
        var intent = args.intent;
        session.send("Hi! I am Spider-Man, created by Marvel Comics! How then am I talking to you? I was really created by a small team at HackTech 2018 using Microsoft Azure Chatbot Services!");
        session.endDialog();
    }
).triggerAction({
    matches: 'TechIntro'
})
bot.dialog('FindSummaryDialog',
    (session, args) => {
        var intent = args.intent;
        session.send("Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.");
        session.send("http://marvelcinematicuniverse.wikia.com/wiki/Spider-Man");
        session.endDialog();
    }
).triggerAction({
    matches: 'FindSummary'
})
bot.dialog('FindComicsDialog',
    (session, args) => {
        var intent = args.intent;
        session.send("https://marvel.com/universe/Spider-Man_(Peter_Parker)");
        session.endDialog();
    }
).triggerAction({
    matches: 'FindComics'
})
bot.dialog('SwapBodiesDialog',
    (session, args) => {
        var intent = args.intent;
        session.send("Check out marvellousswapperheroes.com!");
        session.endDialog();
    }
).triggerAction({
    matches: 'SwapBodies'
})

