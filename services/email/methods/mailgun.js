const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY || 'secret-key-here',
  domain: process.env.DOMAIN || 'www.gmail.com',
  host: process.env.MAILGUN_HOST || 'api.mailgun.net'
})

const sender = process.env.SENDER_EMAIL || 'username username@gmail.com'

exports.mailgun = (ctx) => {
  try {
    const data = {
      from: sender,
      to: ctx.params.to,
      subject: ctx.params.subject,
      text: ctx.params.text,
      html: ctx.params.html,
      'recipient-variables': '{}'
    }
    return mailgun.messages().send(data)
  } catch (err) {
    return err
  }
}
