let { ServiceBroker } = require("moleculer");
let ApiService = require("moleculer-web");

let broker = new ServiceBroker({ logger: console });

broker.createService({
    mixins: [ApiService],
    name: "greet",
    actions: {
        helloWorld() {
            return 'Hello, world!';
        }
    }
});

broker.start();