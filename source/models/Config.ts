export class Config {
    readonly gamesDataURL = "https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json";

    gameIconURLTemplate(gameID: number) {
        return `https://clientupdate-v6.cursecdn.com/GameAssets/${gameID}/Icon64.png`;
    }
}
