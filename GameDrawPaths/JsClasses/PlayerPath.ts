namespace GameDrawPaths {
    export class PlayerPath {
        x: number;
        y: number;
        size: number;
        secColor: string;

        constructor(_x: number, _y: number, _size: number, _secColor: string) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.secColor = _secColor;
            this.drawPath();
//            this.beginPath();
        }

        beginPath(): void {
            crc.beginPath();
        } //close beginPath

        movePathTo(_x: number, _y: number): void {
            crc.lineTo(_x, _y);
        } //close movePathTo()


        drawPath(): void {

            crc2.fillStyle = this.secColor;
            //            crc2.strokeStyle = this.secColor;
            crc2.lineWidth = 0;

            crc2.beginPath();
            crc2.rect(this.x - (this.size / 2), this.y - (this.size / 2), (this.size / 2), (this.size / 2));
            crc2.fill();
            crc2.closePath();
            //              crc2.stroke();

        } //close drawPath()

    } //close class
} //close namespace