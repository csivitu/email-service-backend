const auth = process.env.AUTH || 'secret-key-here'
const mailGun = require('./methods/mailgun')
const senGrid = require('./methods/sengrid')

const { MAILGUN_API_KEY } = process.env

module.exports = {
  name: 'email',
  actions: {
    async send (ctx) {
      if (ctx.params.auth !== auth) {
        ctx.meta.$statusCode = 401
        return { error: 'Error: auth key is invalid' }
      }

      if (!process.env.MAILGUN_API_KEY) {
        ctx.meta.$statusCode = 503
        return { error: 'Error: no api key is available right now, please try again later' }
      }

      const fun = mailGun.mailgun

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
