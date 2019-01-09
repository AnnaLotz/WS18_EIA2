namespace GameDrawPaths {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    var imgData: ImageData;
    let fps: number = 25;

    export let stars: Star[] = [];
    export let players: Player[] = [];



    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#dddddd";
        crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fill();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 2; i++) {
            let player: Player = new Player();
            players.push(player);
            if (i == 0) {
                player.color = "#ff0000";
                player.x = 0 + player.size;
                player.y = 0 + player.size;
            } else {
                player.color = "#0000ff";
                player.x = crc2.canvas.width - player.size;
                player.y = crc2.canvas.height - player.size;
            }

        }

        //        players[0].color = "#ff0000";
        //        players[1].color = "#0000ff";

        for (let i: number = 0; i < 8; i++) {
            let star: Star = new Star();
            star.giveAttributes(i);
            stars.push(star);
        }

        update();
    } //close init

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < players.length; i++) {
            players[i].move();
            players[i].draw();
        }


        for (let i: number = 0; i < stars.length; i++) {
            let star: Star = stars[i];
            //            star.move(i);
            //            star.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }

    } //close update
} //namespace zu