const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class CommandsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'commands',
            group: 'info',
            memberName: 'commands',
            description: 'Sends a list of all commands!',
            examples: ['~commands']
        });
    }

    async run (message) {
        const embed = new Discord.MessageEmbed()
            .setAuthor("Commands", this.client.user.displayAvatarURL())
            .setDescription(`Use \`~help <command name>\` or \`~help <category name>\` for more details.`)
            .setColor('727293')
            .setThumbnail(this.client.user.displayAvatarURL())
            .setFooter("Mako#8739 | Any message from me can be removed by reacting with a 🎴 emoji.")
            .addField("__Info:__", "`commands` `help` `support`", true)
            .addField("__Moderation:__", "`ban` `kick` `prune` `warn`", true) //debating whether or not i want these aaasdasdasdfasdf
            .addField("__Utility:__", "`color` `time` `translate` `weather`", true)
            .addField("__Search:__", "`img` `osu` `wiki` `urban` `youtube`", true)
            .addField("__Fun:__", "`8ball` `cat` `dog` `f` `horoscope` `meme` `rate` `rightthere` `say` `talk`")
            .addField("__Memes:__", "`bonzi` `disabled` `retarded` `shit` `shits` `thesearch` `triggered`")
            .addField("__Anime:__", "`anime` `catgirl` `moe` `safebooru` `zr`", true)
            .addField("__Voice:__", "`listen` `speak`", true)
            .addField("__Action:__", "`cry` `disgust` `grope` `hand` `hug` `kiss` `lewd` `nobully` `nom` `nyan` `pat` `pout` `slap` `smug` `slap` `stare` `tickle`", true)
            .addField("__2D NSFW:__", "`hentai` `hentaiirl` `neko` `trap`", true)
            .addField("__3D NSFW:__", "`ass` `boobs` `nsfw` `nsfwgif` `pornhub`", true)
            .addField("__NSFW Image Boards:__", "`danbooru` `gelbooru` `konachan` `rule34` `yandere` `e621`")
        message.channel.send({embed}).then(m=> {m.react('🎴')})
	}
}