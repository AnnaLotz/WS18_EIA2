namespace L10_Animation {
    
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    export let stars: Star[] = [];
    var imgData: ImageData;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#dddddd";
        crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fill();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

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

        for (let i: number = 0; i < stars.length; i++) {
            let star: Star = stars[i];
            star.move(i);
            star.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }

    } //close update
} //namespace zu