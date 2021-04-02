// @ts-ignore
import { Bot } from 'mineflayer';

export function fInChat(bot: Bot): void {
    bot.on('chat', (_: String, message: String) => {
        if (message.toLowerCase() === 'f') {
            bot.chat('F in chat for ' + bot.username)
            bot.quit()
            // @ts-ignore
            process.exit(0)
        }
    })
}