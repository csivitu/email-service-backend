const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENGRID_API_KEY)
const sender = process.env.SENDER_EMAIL || 'username username@gmail.com'
const [name, email] = sender.split(' ')

exports.sengrid = (ctx) => {
  const data = {
    from: {
      name,
      email
    },
    to: ctx.params.to.split(', '),
    subject: ctx.params.subject,
    text: ctx.params.text,
    html: ctx.params.html
  }
  return sgMail.sendMultiple(data)
}
