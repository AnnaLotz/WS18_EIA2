namespace GameDrawPaths {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let crc: CanvasRenderingContext2D;
    var imgData: ImageData;
    let fps: number = 25;

    export let stars: Star[] = [];
    export let players: Player[] = [];
    export let playerPath: PlayerPath;
    export let playerPaths: PlayerPath[] = [];
    export let playerAreas: PlayerArea[] = [];



    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "black";
        crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fill();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 2; i++) {
            let player: Player = new Player(i);

            
            players.push(player);
            
        }

        //        Kugel
        //        for (let i: number = 0; i < 1; i++) {
        //            let star: Star = new Star();
        //            star.giveAttributes(i);
        //            stars.push(star);
        //        }

        update();
    } //close init

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        
        

//        for (let i: number = 0; i < playerPaths.length; i++) {
////            playerPaths[i].movePathTo(players[i].x, players[i].y);
////            console.log(playerPath.beginPath);
//            playerPaths[i].drawPath();
//        }
//
        for (let i: number = 0; i < playerAreas.length; i++) {
            playerAreas[i].initialArea(); // wird im Player-constuctor auch aufgerufen
        }

        for (let i: number = 0; i < players.length; i++) {
            players[i].move();
            players[i].draw();
        }

    } //close update
} //namespace zu