namespace GameDrawPaths {
    export class Player {
        x: number;
        y: number;
        size: number = 40;
        speed: number = 5;
        xMovingDirection: number;
        yMovingDirection: number;
        color: string;
        secColor: string;

        constructor(_i: number) {
            console.log(_i);
            if (_i == 0) {
                this.color = "#ff0000";
                this.secColor = "#cc0000";
                this.x = 0 + this.size;
                this.y = 0 + this.size;
            } else {
                this.color = "#0000ff";
                this.secColor = "#0000bb";
                this.x = crc2.canvas.width - this.size;
                this.y = crc2.canvas.height - this.size;
            }
            let playerArea: PlayerArea = new PlayerArea(this.x, this.y, this.secColor);
            playerAreas.push(playerArea);
            //            playerArea.initialArea();
            console.log(this.x, this.y);
        }


        move(): void {
            if (this.xMovingDirection < 0) {
                if (this.x <= this.size / 2) {
                    this.x = (this.size / 2);
                } else {
                    this.x -= this.speed;
                    //                    playerPath = new PlayerPath(this.x, this.y, this.size, this.secColor);
                    //                    playerPaths.push(playerPath);
                    //                    playerPath.movePathTo(this.x, this.y);
                }
            } else if (this.xMovingDirection > 0) {
                if (this.x >= crc2.canvas.width) {
                    this.x = crc2.canvas.width;
                } else {
                    this.x += this.speed;
                    //                    playerPath = new PlayerPath(this.x, this.y, this.size, this.secColor);
                    //                    playerPaths.push(playerPath);
                    //                    playerPath.movePathTo(this.x, this.y);
                }
            }

            if (this.yMovingDirection < 0) {
                if (this.y <= this.size / 2) {
                    this.y = (this.size / 2);
                } else {
                    this.y -= this.speed;
                    //                    playerPath = new PlayerPath(this.x, this.y, this.size, this.secColor);
                    //                    playerPaths.push(playerPath);
                    //                    playerPath.movePathTo(this.x, this.y);
                }
            } else if (this.yMovingDirection > 0) {
                if (this.y >= crc2.canvas.height) {
                    this.y = crc2.canvas.height;
                } else {
                    this.y += this.speed;
                    //                    playerPath = new PlayerPath(this.x, this.y, this.size, this.secColor);
                    //                    playerPaths.push(playerPath);
                    //                    playerPath.movePathTo(this.x, this.y);
                    //                    console.log(playerPaths);
                }
            }
        } //close move()




        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.rect(this.x - (this.size / 2), this.y - (this.size / 2), (this.size / 2), (this.size / 2));
            crc2.fill();
            crc2.stroke();

        }
    } //close class
} //close namespace