let Discord = require("discord.js")
let client = new Discord.WebhookClient('777930809100992513', 'r050yoHmgtA6x-zTM4UKSl7M6E3utTp2GEfDjtL5kgXncb_WwWefmw6qOoXuhqo_bVMo');
let bot = new Discord.Client()

bot.login("NzA3NjQwMDQxNjIyNzMyODkw.X7LONg.DyA3eANalvVdUgokJnjs0JJPx7k")

bot.on("ready",()=>console.log("Бот запущен и готов к работе!"))

bot.on("message",(message)=>{
    if(message.author.bot)return ;
        if(message.channel.id !== "603205650440388618")return;
        client.send(message.content, {username: message.author.username, avatarURL: message.author.avatarURL})
        let array = ["эвери","шаути"]
    for(let i = 0; i<array.length; i++ ){
    if(message.content.toLowerCase().includes(array[i])){
    i = array.length;
    client.send("@everyone, тут о вас говорят. " + "(" + message.author.tag + ")")
    }}
    })