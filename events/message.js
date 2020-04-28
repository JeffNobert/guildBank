frame = require('../guildbank/frame').discordFrame
inventory = require('../guildbank/inventory')
chars = require('../guildbank/chars')
stats = require('../guildbank/stats')
update = require('../guildbank/update')
role = require('../role.js')

module.exports = (client, message, db) => {
  
  console.log('message.js called')
  if(message.content.startsWith('!inventory')){
    (async (message, db, fn) => {
      await frame(message, db, fn)
    })(message, db, inventory)
  }
  if(message.content.startsWith('!chars')){
    (async (message, db, fn) => {
      await frame(message, db, fn)
    })(message, db, chars)
  }
  if(message.content.startsWith('!stats')){
    (async (message, db, fn) => {
      await frame(message, db, fn)
    })(message, db, stats)
  }
  else if (message.content.startsWith('!update')){
    (async (message, db, fn) => {
      await frame(message, db, fn)
    })(message, db, update)
  }
  else if(message.content.startsWith('!role')){
    (async (message, db, fn) => {
      await frame(message, db, fn)
    })(message, db, role)
  }
}