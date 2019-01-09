var L10_Animation;
(function (L10_Animation) {
    class Star {
        constructor() {
            this.speed = 2.5;
            this.distancetoBounce = 20;
        }
        move() {
            this.checkPosition();
            this.x += this.dx;
            this.y += this.dy;
        }
        checkPosition() {
            if (this.x <= 20 || this.x >= L10_Animation.crc2.canvas.width - this.distancetoBounce) {
                this.dx = -this.dx;
            }
            if (this.y <= 20 || this.y >= L10_Animation.crc2.canvas.height - this.distancetoBounce) {
                this.dy = -this.dy;
            }
            //            for (let i: number = 0; i < stars.length; i++) {
            //                if (this.x + 20 <= stars[i].x || this.x - 20 >= stars[i].x) {
            //                    this.dx = -this.dx;
            //                }
            //                if (this.y + 20 <= stars[i].y || this.y - 20 >= stars[i].y) {
            //                    this.dy = -this.dy;
            //                }
            //
            //            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
            g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
            b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2); // blue
            return "#" + r + g + b;
        }
        draw() {
            L10_Animation.crc2.fillStyle = this.color;
            L10_Animation.crc2.strokeStyle = "#000000";
            L10_Animation.crc2.lineWidth = 2;
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x - 20, this.y + 10);
            L10_Animation.crc2.lineTo(this.x, this.y - 20);
            L10_Animation.crc2.lineTo(this.x + 20, this.y + 10);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fill();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x - 20, this.y - 10);
            L10_Animation.crc2.lineTo(this.x + 20, this.y - 10);
            L10_Animation.crc2.lineTo(this.x, this.y + 20);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fill();
            L10_Animation.crc2.stroke();
        }
    }
    L10_Animation.Star = Star; //close class
})(L10_Animation || (L10_Animation = {})); //close namespace
//# sourceMappingURL=Star.js.map