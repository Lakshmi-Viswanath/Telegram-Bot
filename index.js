const {Telegraf} = require('telegraf');
require('dotenv').config();
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to Lakshmi\'s bot'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.command('toplinuxcommands', (ctx) => ctx.reply('ls pwd grep'));

bot.command('new', async(ctx) => {
    const response = await axios.get('https://fakestoreapi.com/products/1');
    await ctx.reply(response.data.description)
});

bot.on('text', (ctx) => {
    if(ctx.update.message.text == 'Hi'){
    ctx.reply('Hi. How are you?');
    }
    else{
    ctx.reply('I don\'t understand humans');
    }
  }
);

bot.launch();

