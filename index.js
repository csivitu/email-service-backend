let { ServiceBroker } = require("moleculer");
let ApiService = require("moleculer-web");
require('dotenv').config()

let broker = new ServiceBroker({ logger: console });

broker.createService({
  mixins: [ApiService],
  name: "greet",
  actions: {
    send() {
      var API_KEY = process.env.API_KEY;
      var DOMAIN = process.env.DOMAIN;
        console.log(DOMAIN);
      var mailgun = require("mailgun-js")({
        apiKey: API_KEY,
        domain: DOMAIN,
        host: process.env.HOST,
      });

      const data = {
        from: process.env.SENDER_EMAIL,
        to: "test@gmail.com",
        subject: "Hello",
        text: "Testing some Mailgun awesomeness!",
      };

      mailgun.messages().send(data, (error, body) => {
        console.log(error);
        console.log(body);
      });
      return("Email sent");
    },
  },
});

broker.start();
