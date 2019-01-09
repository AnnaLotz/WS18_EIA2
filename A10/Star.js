var L10_Animation;
(function (L10_Animation) {
    class Star {
        constructor() {
            this.radius = 20;
            this.speed = 2.5;
        }
        giveAttributes(_i) {
            this.x = Math.random() * ((L10_Animation.crc2.canvas.width - 22) - 22) + 22; // Math.random() * (max - min) + min
            this.y = Math.random() * ((L10_Animation.crc2.canvas.height - 22) - 22) + 22;
            this.dx = (Math.random() * 4 - 2) * this.speed;
            this.dy = (Math.random() * 4 - 2) * this.speed;
            this.color = this.getRandomColor();
        }
        move(_i) {
            this.checkPosition();
            this.checkHitWithAnother(_i);
            this.x += this.dx;
            this.y += this.dy;
        }
        checkPosition() {
            if (this.x <= this.radius || this.x >= L10_Animation.crc2.canvas.width - this.radius) {
                this.dx = -this.dx;
            }
            if (this.y <= this.radius || this.y >= L10_Animation.crc2.canvas.height - this.radius) {
                this.dy = -this.dy;
            }
        } //close checkPosition
        checkHitWithAnother(_i) {
            for (let i = 0; i < L10_Animation.stars.length; i++) {
                if (_i != i) {
                    if (this.x <= L10_Animation.stars[i].x + this.radius * 1.8 && this.x >= L10_Animation.stars[i].x - this.radius * 1.8) {
                        if (this.y <= L10_Animation.stars[i].y + this.radius * 1.8 && this.y >= L10_Animation.stars[i].y - this.radius * 1.8) {
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
            L10_Animation.crc2.fillStyle = this.color;
            L10_Animation.crc2.strokeStyle = "#000000";
            L10_Animation.crc2.lineWidth = 2;
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Animation.crc2.fill();
            L10_Animation.crc2.stroke();
        }
    }
    L10_Animation.Star = Star; //close class
})(L10_Animation || (L10_Animation = {})); //close namespace
//# sourceMappingURL=Star.js.map