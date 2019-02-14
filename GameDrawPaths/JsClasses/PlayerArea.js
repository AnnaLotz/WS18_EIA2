var GameDrawPaths;
(function (GameDrawPaths) {
    class PlayerArea {
        constructor(_x, _y, _secColor) {
            this.size = 40;
            //            this.player = _ownPlayer;
            this.x = _x;
            this.y = _y;
            this.secColor = _secColor;
        }
        initialArea() {
            //            for (let i: number = 0; i < players.length; i++) {
            GameDrawPaths.crc2.strokeStyle = this.secColor;
            GameDrawPaths.crc2.fillStyle = this.secColor;
            GameDrawPaths.crc2.beginPath();
            //            crc2.rect(this.x - 10, this.y - 10, this.x + 10, this.x + 10);
            GameDrawPaths.crc2.rect(this.x - (this.size), this.y - (this.size), (this.size / 2), (this.size / 2));
            GameDrawPaths.crc2.fill();
            GameDrawPaths.crc2.stroke();
            //            }
        } // close initialArea()
        draw() {
            //
        } //close draw()
    }
    GameDrawPaths.PlayerArea = PlayerArea; //close class
})(GameDrawPaths || (GameDrawPaths = {})); //close namespace
//# sourceMappingURL=PlayerArea.js.map