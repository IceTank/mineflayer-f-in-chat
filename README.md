<h1 align="center">mineflayer-f-in-chat</h1>
<p align="center"><i>A simple Plugin that makes the bot quit when someone types 'f' in chat</i></p>

<p align="center">
  <img src="https://github.com/IceTank/mineflayer-f-in-chat/workflows/Build/badge.svg" />
  <img src="https://img.shields.io/github/repo-size/IceTank/mineflayer-f-in-chat" />
  <img src="https://img.shields.io/github/contributors/IceTank/mineflayer-f-in-chat" />
  <img src="https://img.shields.io/github/license/IceTank/mineflayer-f-in-chat" />
</p>

---

### Getting Started

This plugin is built using Node and can be installed using:
```bash
git clonse https://github.com/IceTank/mineflayer-f-in-chat.git
```

### How to use

```js
const mineflayer = require("mineflayer")
const finchat = require('path/to/plugin/index')

// Create your bot
const bot = mineflayer.createBot({ username: "Player" })
// Wait for the bot to join the world
bot.on('spawn', () => {
    // Load the plugin
    bot.loadPlugin(finchat)
})
```

### Usage

To make the bot quit type the following into chat:
```
f
```

This plugin also supports a capital letter
```
F
```

### License

This project uses the [MIT](https://github.com/TheDudeFromCI/mineflayer-plugin-template/blob/master/LICENSE) license.

### Contributions

This project is accepting PRs and Issues. See something you think can be improved? Go for it! Any and all help is highly appreciated!

For larger changes, it is recommended to discuss these changes in the issues tab before writing any code. It's also preferred to make many smaller PRs than one large one, where applicable.
