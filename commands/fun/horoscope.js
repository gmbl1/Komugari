const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const signs = require('../../assets/json/horoscope');

module.exports = class HoroscopeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'horoscope',
            group: 'fun',
            memberName: 'horoscope',
            description: 'Gets your daily horoscope!',
            examples: ['~horoscope <sign>'],
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    }

    async run (message, args) {
        const sign = message.content.split(/\s+/g).slice(1).join(" ");
        if(!sign) return message.channel.send("Please give me a sign to get the horoscope of!")

        if (!signs.includes(sign.toLowerCase())) return message.channel.send('That is not a valid sign!')

        const text = await snekfetch
            .get(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today`);
        const body = JSON.parse(text.body);
    
        try{
            const embed = new Discord.MessageEmbed()
                .setColor('#074288')
                .setAuthor(`Horoscope for ${body.sunsign} on ${body.date}`, 'http://images.indianexpress.com/2017/01/zodiac-love-2017-main_820_thinkstockphotos-481896132.jpg?w=820')
                .setDescription(body.horoscope)
                .setTimestamp()
                .setFooter(`${message.author.username}'s Horoscope`)
                .addField('Mood', body.meta.mood, true)
                .addField("Intensity", body.meta.intensity, true)
            return message.channel.send({embed})
    
        } catch(err) {
            message.react('✖')
            return console.log(err)
        }
	}
}