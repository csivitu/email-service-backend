const broker = require('../init')
const auth = process.env.AUTH || 'secret-key-here'
const mailGun = require('./methods/mailgun')
const senGrid = require('./methods/sengrid')

broker.createService({
  settings: {
    port: process.env.PORT || '3000'
  },
  name: 'email',
  actions: {
    async send (ctx) {
      let response = ''
      if (ctx.params.auth !== auth) {
        ctx.meta.$statusCode = 401
        return { error: 'Error: auth key invalid' }
      }

      try {
        if (Math.floor(Math.random() * 2) % 2) {
          response = await senGrid.sengrid(ctx)
        } else {
          response = await mailGun.mailgun(ctx)
        }
        return response
      } catch (err) {
        ctx.meta.$statusCode = err.statusCode
        return { error: err.toString() }
      }
    }
  }
})
