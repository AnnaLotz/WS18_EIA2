var GameDrawPaths;
(function (GameDrawPaths) {
    class Player {
        constructor() {
            this.size = 50;
            this.speed = 5;
        }
        move() {
            if (this.xMovingDirection < 0) {
                if (this.x <= 0)
                    this.x = 0;
                else
                    this.x -= this.speed;
            }
            else if (this.xMovingDirection > 0) {
                if (this.x >= GameDrawPaths.crc2.canvas.width - 20)
                    this.x = GameDrawPaths.crc2.canvas.width - 20;
                else
                    this.x += this.speed;
            }
            if (this.yMovingDirection < 0) {
                if (this.y <= 0)
                    this.y = 0;
                else
                    this.y -= this.speed;
            }
            else if (this.yMovingDirection > 0) {
                if (this.y >= GameDrawPaths.crc2.canvas.height - 20)
                    this.y = GameDrawPaths.crc2.canvas.height - 20;
                else
                    this.y += this.speed;
            }
        }
        checkPosition() {
            if (this.x <= this.size || this.x >= GameDrawPaths.crc2.canvas.width - this.size) {
                this.dx = -this.dx;
            }
            if (this.y <= this.size || this.y >= GameDrawPaths.crc2.canvas.height - this.size) {
                this.dy = -this.dy;
            }
        } //close checkPosition
        draw() {
            GameDrawPaths.crc2.fillStyle = this.color;
            GameDrawPaths.crc2.strokeStyle = this.color;
            GameDrawPaths.crc2.lineWidth = 2;
            GameDrawPaths.crc2.beginPath();
            GameDrawPaths.crc2.rect(this.x - (this.size / 2), this.y - (this.size / 2), this.size, this.size);
            GameDrawPaths.crc2.fill();
            GameDrawPaths.crc2.stroke();
        }
    }
    GameDrawPaths.Player = Player; //close class
})(GameDrawPaths || (GameDrawPaths = {})); //close namespace
//# sourceMappingURL=Player.js.map