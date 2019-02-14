var GameDrawPaths;
(function (GameDrawPaths) {
    class PlayerPath {
        constructor(_x, _y, _size, _secColor) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.secColor = _secColor;
            this.drawPath();
            //            this.beginPath();
        }
        beginPath() {
            GameDrawPaths.crc.beginPath();
        } //close beginPath
        movePathTo(_x, _y) {
            GameDrawPaths.crc.lineTo(_x, _y);
        } //close movePathTo()
        drawPath() {
            GameDrawPaths.crc2.fillStyle = this.secColor;
            //            crc2.strokeStyle = this.secColor;
            GameDrawPaths.crc2.lineWidth = 0;
            GameDrawPaths.crc2.beginPath();
            GameDrawPaths.crc2.rect(this.x - (this.size / 2), this.y - (this.size / 2), (this.size / 2), (this.size / 2));
            GameDrawPaths.crc2.fill();
            GameDrawPaths.crc2.closePath();
            //              crc2.stroke();
        } //close drawPath()
    }
    GameDrawPaths.PlayerPath = PlayerPath; //close class
})(GameDrawPaths || (GameDrawPaths = {})); //close namespace
//# sourceMappingURL=PlayerPath.js.map