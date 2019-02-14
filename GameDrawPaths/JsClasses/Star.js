var GameDrawPaths;
(function (GameDrawPaths) {
    class Star {
        constructor() {
            this.radius = 20;
            this.speed = 2.5;
        }
        giveAttributes(_i) {
            this.x = Math.random() * ((GameDrawPaths.crc2.canvas.width - 22) - 22) + 22; // Math.random() * (max - min) + min
            this.y = Math.random() * ((GameDrawPaths.crc2.canvas.height - 22) - 22) + 22;
            this.dx = (Math.random() * 4 - 2);
            this.dy = (Math.random() * 4 - 2);
            this.color = this.getRandomColor();
        }
        move(_i) {
            this.checkPosition();
            this.checkHitWithAnother(_i);
            this.x += this.dx * this.speed;
            this.y += this.dy * this.speed;
            this.speed += 0.005;
        }
        checkPosition() {
            if (this.x <= this.radius || this.x >= GameDrawPaths.crc2.canvas.width - this.radius) {
                this.dx = -this.dx;
            }
            if (this.y <= this.radius || this.y >= GameDrawPaths.crc2.canvas.height - this.radius) {
                this.dy = -this.dy;
            }
        } //close checkPosition
        checkHitWithAnother(_i) {
            for (let i = 0; i < GameDrawPaths.stars.length; i++) {
                if (_i != i) {
                    if (this.x <= GameDrawPaths.stars[i].x + this.radius * 1.8 && this.x >= GameDrawPaths.stars[i].x - this.radius * 1.8) {
                        if (this.y <= GameDrawPaths.stars[i].y + this.radius * 1.8 && this.y >= GameDrawPaths.stars[i].y - this.radius * 1.8) {
                            this.dy = -this.dy;
                            this.dx = -this.dx;
                        }
                    }
                }
            }
        } //close checkHitWithAnother
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
            g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
            b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2); // blue
            return "#" + r + g + b;
        }
        draw() {
            GameDrawPaths.crc2.fillStyle = this.color;
            GameDrawPaths.crc2.strokeStyle = "#000000";
            GameDrawPaths.crc2.lineWidth = 2;
            GameDrawPaths.crc2.beginPath();
            GameDrawPaths.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            GameDrawPaths.crc2.fill();
            GameDrawPaths.crc2.stroke();
        }
    }
    GameDrawPaths.Star = Star; //close class
})(GameDrawPaths || (GameDrawPaths = {})); //close namespace
//# sourceMappingURL=Star.js.map