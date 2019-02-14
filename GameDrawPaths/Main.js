var GameDrawPaths;
(function (GameDrawPaths) {
    window.addEventListener("load", init);
    var imgData;
    let fps = 25;
    GameDrawPaths.stars = [];
    GameDrawPaths.players = [];
    GameDrawPaths.playerPaths = [];
    GameDrawPaths.playerAreas = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        GameDrawPaths.crc = canvas.getContext("2d");
        GameDrawPaths.crc2 = canvas.getContext("2d");
        console.log(GameDrawPaths.crc2);
        GameDrawPaths.crc2.fillStyle = "black";
        GameDrawPaths.crc2.rect(0, 0, GameDrawPaths.crc2.canvas.width, GameDrawPaths.crc2.canvas.height);
        GameDrawPaths.crc2.fill();
        imgData = GameDrawPaths.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 2; i++) {
            let player = new GameDrawPaths.Player(i);
            GameDrawPaths.players.push(player);
        }
        //        Kugel
        //        for (let i: number = 0; i < 1; i++) {
        //            let star: Star = new Star();
        //            star.giveAttributes(i);
        //            stars.push(star);
        //        }
        update();
    } //close init
    function update() {
        window.setTimeout(update, 1000 / fps);
        GameDrawPaths.crc2.clearRect(0, 0, GameDrawPaths.crc2.canvas.width, GameDrawPaths.crc2.canvas.height);
        GameDrawPaths.crc2.putImageData(imgData, 0, 0);
        //        for (let i: number = 0; i < playerPaths.length; i++) {
        ////            playerPaths[i].movePathTo(players[i].x, players[i].y);
        ////            console.log(playerPath.beginPath);
        //            playerPaths[i].drawPath();
        //        }
        //
        for (let i = 0; i < GameDrawPaths.playerAreas.length; i++) {
            GameDrawPaths.playerAreas[i].initialArea(); // wird im Player-constuctor auch aufgerufen
        }
        for (let i = 0; i < GameDrawPaths.players.length; i++) {
            GameDrawPaths.players[i].move();
            GameDrawPaths.players[i].draw();
        }
    } //close update
})(GameDrawPaths || (GameDrawPaths = {})); //namespace zu
//# sourceMappingURL=Main.js.map