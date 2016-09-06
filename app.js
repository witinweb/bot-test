const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: 'EAALa7RVQHUkBAFG5ZBcDQ3KUYXQgycwPzwX8LFP2Eq13esHX00ZApWtsL7wrnsQj5AD9ZB0r8v4fKXDKhkob0ECBseWyRO2jqngcCXJGaFlPMnIN3teQZBOwcZAYERdZAQ7a3dlDHS2Tr2360d9JDLwlYjNmny3TPAwal3knnHSQZDZD',
  verify: 'helloworld',
  app_secret: '09b99ac9e9d101fb82c7a6ab753199b2'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`${profile.first_name} ${profile.last_name}님이 요렇게 말했다: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT)
console.log('서버 뜸')
