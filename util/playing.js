module.exports = (bot) => {
    bot.user.setActivity(`to The Time Animals`, { type: "LISTENING", url: "https://www.twitch.tv/elarabots_discord" });
    var status = [
        `With Time`
    ];
    setInterval(() => {
        let gameval = Math.floor((Math.random() * status.length));
        bot.user.setActivity(`${status[gameval]}`, { type: "PLAYING", url: "https://www.twitch.tv/elarabots_discord" });
    }, 10 * 1000);
}
// This is to set your bot's playing status it will randomize through the statuses
