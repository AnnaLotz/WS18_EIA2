namespace L10_Animation {
    export class Star {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        speed: number = 2.5;
        distancetoBounce: number = 20;

        move(): void {
            this.checkPosition();
            this.x += this.dx;
            this.y += this.dy;
        }

        checkPosition(): void {
            if (this.x <= 20 || this.x >= crc2.canvas.width - this.distancetoBounce) {
                this.dx = -this.dx;
            }
            if (this.y <= 20 || this.y >= crc2.canvas.height - this.distancetoBounce) {
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

        getRandomColor(): string {
            var r: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
                g: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
                b: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2); // blue
            return "#" + r + g + b;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 10);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.lineTo(this.x, this.y + 20);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
    } //close class
} //close namespace