const auth = process.env.AUTH || 'secret-key-here'
const mailGun = require('./methods/mailgun')
const senGrid = require('./methods/sengrid')

const { SENGRID_API_KEY, MAILGUN_API_KEY } = process.env

module.exports = {
  name: 'email',
  actions: {
    async send (ctx) {
      if (ctx.params.auth !== auth) {
        ctx.meta.$statusCode = 401
        return { error: 'Error: auth key is invalid' }
      }

      if (!process.env.MAILGUN_API_KEY && !process.env.SENGRID_API_KEY) {
        ctx.meta.$statusCode = 503
        return { error: 'Error: no api key is available right now, please try again later' }
      }

      const fun = MAILGUN_API_KEY && SENGRID_API_KEY
        ? Math.random() < 0.5 ? senGrid.sengrid : mailGun.mailgun
        : MAILGUN_API_KEY ? mailGun.mailgun : senGrid.sengrid

      try {
        const response = await fun(ctx)
        return response
      } catch (err) {
        ctx.meta.$statusCode = err.statusCode
        return { error: err.toString() }
      }
    }
  }
}
