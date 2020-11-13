const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()
broker.start()

require('dotenv').config()

const ApiService = require('moleculer-web')

broker.createService({
  mixins: [ApiService],
  settings: {
    port: process.env.PORT || '3000'
  }
})

module.exports = broker

require('./services/init')
