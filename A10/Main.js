var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let fps = 25;
    L10_Animation.stars = [];
    var imgData;
    function init(_event) {
        //        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        L10_Animation.crc2.fillStyle = "#dddddd";
        L10_Animation.crc2.rect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        L10_Animation.crc2.fill();
        imgData = L10_Animation.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 5; i++) {
            let star = new L10_Animation.Star();
            star.x = Math.random() * ((L10_Animation.crc2.canvas.width - 22) - 22) + 22; // Math.random() * (max - min) + min
            star.y = Math.random() * ((L10_Animation.crc2.canvas.height - 22) - 22) + 22;
            star.dx = (Math.random() * 4 - 2) * star.speed;
            star.dy = (Math.random() * 4 - 2) * star.speed;
            star.color = star.getRandomColor();
            L10_Animation.stars.push(star);
        }
        update();
    } //close init
    function update() {
        window.setTimeout(update, 1000 / fps);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < L10_Animation.stars.length; i++) {
            let star = L10_Animation.stars[i];
            star.move();
            star.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }
    } //close update
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Main.js.map