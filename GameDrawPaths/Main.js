var GameDrawPaths;
(function (GameDrawPaths) {
    window.addEventListener("load", init);
    var imgData;
    let fps = 25;
    GameDrawPaths.stars = [];
    GameDrawPaths.players = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        GameDrawPaths.crc2 = canvas.getContext("2d");
        console.log(GameDrawPaths.crc2);
        GameDrawPaths.crc2.fillStyle = "#dddddd";
        GameDrawPaths.crc2.rect(0, 0, GameDrawPaths.crc2.canvas.width, GameDrawPaths.crc2.canvas.height);
        GameDrawPaths.crc2.fill();
        imgData = GameDrawPaths.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 2; i++) {
            let player = new GameDrawPaths.Player();
            GameDrawPaths.players.push(player);
            if (i == 0) {
                player.color = "#ff0000";
                player.x = 0 + player.size;
                player.y = 0 + player.size;
            }
            else {
                player.color = "#0000ff";
                player.x = GameDrawPaths.crc2.canvas.width - player.size;
                player.y = GameDrawPaths.crc2.canvas.height - player.size;
            }
        }
        //        players[0].color = "#ff0000";
        //        players[1].color = "#0000ff";
        for (let i = 0; i < 8; i++) {
            let star = new GameDrawPaths.Star();
            star.giveAttributes(i);
            GameDrawPaths.stars.push(star);
        }
        update();
    } //close init
    function update() {
        window.setTimeout(update, 1000 / fps);
        GameDrawPaths.crc2.clearRect(0, 0, GameDrawPaths.crc2.canvas.width, GameDrawPaths.crc2.canvas.height);
        GameDrawPaths.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < GameDrawPaths.players.length; i++) {
            GameDrawPaths.players[i].move();
            GameDrawPaths.players[i].draw();
        }
        for (let i = 0; i < GameDrawPaths.stars.length; i++) {
            let star = GameDrawPaths.stars[i];
        }
    } //close update
})(GameDrawPaths || (GameDrawPaths = {})); //namespace zu
//# sourceMappingURL=Main.js.map