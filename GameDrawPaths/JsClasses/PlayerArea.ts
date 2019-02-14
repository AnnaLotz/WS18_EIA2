namespace GameDrawPaths {
    export class PlayerArea {
        x: number;
        y: number;
        size: number = 40;
        secColor: string;
        player: Player;


        constructor(_x: number, _y: number, _secColor: string) {

            //            this.player = _ownPlayer;
            this.x = _x;
            this.y = _y;
            this.secColor = _secColor;

        }

        initialArea(): void {
            //            for (let i: number = 0; i < players.length; i++) {

            crc2.strokeStyle = this.secColor;
            crc2.fillStyle = this.secColor;
            crc2.beginPath();
            //            crc2.rect(this.x - 10, this.y - 10, this.x + 10, this.x + 10);
            crc2.rect(this.x - (this.size), this.y - (this.size), (this.size / 2), (this.size / 2));
            crc2.fill();
            crc2.stroke();

            //            }
        } // close initialArea()

        draw(): void {
            //

        } //close draw()




    } //close class
} //close namespace