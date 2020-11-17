const broker = require('../init')
const auth = process.env.AUTH || 'secret-key-here'
const mailGun = require('./methods/mailgun')
const senGrid = require('./methods/sengrid')

broker.createService({
  name: 'email',
  actions: {
    send (ctx) {
      if (ctx.params.auth !== auth) {
        ctx.meta.$statusCode = 401
        return { error: 'Error: auth key is invalid' }
      }

      if (!process.env.MAILGUN_API_KEY && !process.env.SENGRID_API_KEY) {
        ctx.meta.$statusCode = 503
        return { error: 'Error: no api key is available righ now, please try again later' }
      }

      let response = ''
      try {
        if (Math.floor(Math.random() * 2) % 2 && process.env.SENGRID_API_KEY) {
          response = senGrid.sengrid(ctx)
        } else {
          response = mailGun.mailgun(ctx)
        }
        return response
      } catch (err) {
        ctx.meta.$statusCode = err.statusCode
        return { error: err.toString() }
      }
    }
  }
})
