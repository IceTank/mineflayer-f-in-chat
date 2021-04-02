/**
 * This example bot runs the plugin fInChat.
 */

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node example.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

const mineflayer = require('mineflayer')
const { fInChat } = require('../lib/index')

const bot = mineflayer.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ? process.argv[4] : 'PressFInChat',
  password: process.argv[5]
})

bot.on('spawn', () => {
  bot.loadPlugin(fInChat)
})
