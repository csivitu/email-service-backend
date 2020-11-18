const { ALLOWED_ORIGINS } = process.env

const ApiService = require('moleculer-web')

module.exports = {
  mixins: [ApiService],
  settings: {
    port: process.env.PORT || '5001',
    cors: {
      origin: ALLOWED_ORIGINS ? ALLOWED_ORIGINS.split(', ') : ''
    }
  }
}
