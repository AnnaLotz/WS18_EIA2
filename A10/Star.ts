namespace L10_Animation {
    export class Star {
        x: number;
        y: number;
        radius: number = 20;
        dx: number;
        dy: number;
        color: string;
        speed: number = 2.5;

        giveAttributes(_i: number): void {

            this.x = Math.random() * ((crc2.canvas.width - 22) - 22) + 22; // Math.random() * (max - min) + min
            this.y = Math.random() * ((crc2.canvas.height - 22) - 22) + 22;
            this.dx = (Math.random() * 4 - 2) * this.speed;
            this.dy = (Math.random() * 4 - 2) * this.speed;
            this.color = this.getRandomColor();
        }

        move(_i: number): void {
            this.checkPosition();
            this.checkHitWithAnother(_i);
            this.x += this.dx;
            this.y += this.dy;
        }

        checkPosition(): void {
            if (this.x <= this.radius || this.x >= crc2.canvas.width - this.radius) {
                this.dx = -this.dx;
            }
            if (this.y <= this.radius || this.y >= crc2.canvas.height - this.radius) {
                this.dy = -this.dy;
            }

        } //close checkPosition

        checkHitWithAnother(_i: number): void {
            for (let i: number = 0; i < stars.length; i++) {
                if (_i != i) {
                    if (this.x <= stars[i].x + this.radius * 1.8 && this.x >= stars[i].x - this.radius * 1.8) {
                        if (this.y <= stars[i].y + this.radius * 1.8 && this.y >= stars[i].y - this.radius * 1.8) {
                            this.dy = -this.dy;
                            this.dx = -this.dx;
                            //return true;
                        }
                    }
                }
            }

        } //close checkHitWithAnother


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
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
        }
    } //close class
} //close namespace