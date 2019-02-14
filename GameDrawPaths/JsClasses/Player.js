var GameDrawPaths;
(function (GameDrawPaths) {
    class Player {
        constructor(_i) {
            this.size = 40;
            this.speed = 5;
            console.log(_i);
            if (_i == 0) {
                this.color = "#ff0000";
                this.secColor = "#cc0000";
                this.x = 0 + this.size;
                this.y = 0 + this.size;
            }
            else {
                this.color = "#0000ff";
                this.secColor = "#0000bb";
                this.x = GameDrawPaths.crc2.canvas.width - this.size;
                this.y = GameDrawPaths.crc2.canvas.height - this.size;
            }
            let playerArea = new GameDrawPaths.PlayerArea(this.x, this.y, this.secColor);
            GameDrawPaths.playerAreas.push(playerArea);
            //            playerArea.initialArea();
            console.log(this.x, this.y);
        }
        move() {
            if (this.xMovingDirection < 0) {
                if (this.x <= this.size / 2) {
                    this.x = (this.size / 2);
                }
                else {
                    this.x -= this.speed;
                }
            }
            else if (this.xMovingDirection > 0) {
                if (this.x >= GameDrawPaths.crc2.canvas.width) {
                    this.x = GameDrawPaths.crc2.canvas.width;
                }
                else {
                    this.x += this.speed;
                }
            }
            if (this.yMovingDirection < 0) {
                if (this.y <= this.size / 2) {
                    this.y = (this.size / 2);
                }
                else {
                    this.y -= this.speed;
                }
            }
            else if (this.yMovingDirection > 0) {
                if (this.y >= GameDrawPaths.crc2.canvas.height) {
                    this.y = GameDrawPaths.crc2.canvas.height;
                }
                else {
                    this.y += this.speed;
                }
            }
        } //close move()
        draw() {
            GameDrawPaths.crc2.fillStyle = this.color;
            GameDrawPaths.crc2.strokeStyle = this.color;
            GameDrawPaths.crc2.lineWidth = 1;
            GameDrawPaths.crc2.beginPath();
            GameDrawPaths.crc2.rect(this.x - (this.size / 2), this.y - (this.size / 2), (this.size / 2), (this.size / 2));
            GameDrawPaths.crc2.fill();
            GameDrawPaths.crc2.stroke();
        }
    }
    GameDrawPaths.Player = Player; //close class
})(GameDrawPaths || (GameDrawPaths = {})); //close namespace
//# sourceMappingURL=Player.js.map