require('dotenv').config()

const { ServiceBroker } = require('moleculer')
const ApiService = require('moleculer-web')

const mailgun = require('mailgun-js')({
  apiKey: process.env.API_KEY || 'secret-key-here',
  domain: process.env.DOMAIN || 'www.gmail.com',
  host: process.env.HOST || 'api.mailgun.net'
})

const sender = process.env.SENDER_EMAIL || 'username username@gmail.com'
const auth = process.env.AUTH || 'secret-key-here'

const broker = new ServiceBroker()

broker.createService({
  mixins: [ApiService],
  settings: {
    port: process.env.PORT || '3000'
  },
  name: 'email',
  actions: {
    send ({ params }) {
      if (params.auth !== auth) {
        return { error: 'auth key invalid' }
      }
      const data = {
        from: sender,
        to: params.to,
        subject: params.subject,
        text: params.text
      }
      return (mailgun.messages().send(data))
    }
  }
})

broker.start()
