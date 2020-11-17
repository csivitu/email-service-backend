const broker = require('../init')

const mailgun = require('mailgun-js')({
  apiKey: process.env.API_KEY || 'secret-key-here',
  domain: process.env.DOMAIN || 'www.gmail.com',
  host: process.env.HOST || 'api.mailgun.net'
})

const sender = process.env.SENDER_EMAIL || 'username username@gmail.com'
const auth = process.env.AUTH || 'secret-key-here'

broker.createService({
  name: 'email',
  actions: {
    async send (ctx) {
      if (ctx.params.auth !== auth) {
        ctx.meta.$statusCode = 401
        return { error: 'Error: auth key invalid' }
      }
      const data = {
        from: sender,
        to: ctx.params.to,
        subject: ctx.params.subject,
        text: ctx.params.text,
        html: ctx.params.html,
        'recipient-variables': '{}'
      }
      try {
        const res = await mailgun.messages().send(data)
        return (res)
      } catch (err) {
        ctx.meta.$statusCode = err.statusCode
        return ({ error: err.toString() })
      }
    }
  }
})
