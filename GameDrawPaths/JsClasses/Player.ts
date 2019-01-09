namespace GameDrawPaths {
    export class Player {
        x: number;
        y: number;
        size: number = 50;
        dx: number;
        dy: number;
        speed: number = 5;
        color: string;
        xMovingDirection: number;
        yMovingDirection: number;


        move(): void {
            if (this.xMovingDirection < 0) {
                if (this.x <= 0)
                    this.x = 0;
                else
                    this.x -= this.speed;
            } else if (this.xMovingDirection > 0) {
                if (this.x >= crc2.canvas.width - 20)
                    this.x = crc2.canvas.width - 20;
                else
                    this.x += this.speed;
            }

            if (this.yMovingDirection < 0) {
                if (this.y <= 0)
                    this.y = 0;
                else
                    this.y -= this.speed;
            } else if (this.yMovingDirection > 0) {
                if (this.y >= crc2.canvas.height - 20)
                    this.y = crc2.canvas.height - 20;
                else
                    this.y += this.speed;
            }
        }



        checkPosition(): void {
            if (this.x <= this.size || this.x >= crc2.canvas.width - this.size) {
                this.dx = -this.dx;
            }
            if (this.y <= this.size || this.y >= crc2.canvas.height - this.size) {
                this.dy = -this.dy;
            }

        } //close checkPosition


        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.rect(this.x - (this.size / 2), this.y - (this.size / 2), this.size, this.size);
            crc2.fill();
            crc2.stroke();
        }
    } //close class
} //close namespace