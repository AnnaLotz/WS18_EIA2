var GameDrawPaths;
(function (GameDrawPaths) {
    window.onkeydown = handleKeyDown;
    window.onkeyup = handleKeyUp;
    //wenn irgendeine Taste gedückt wird: über switch abfragen, welche Taste und somit jeweiligem Wert ändern
    function handleKeyDown(_event) {
        switch (_event.keyCode) {
            case 37:
                GameDrawPaths.players[1].xMovingDirection = -1;
                break;
            case 39:
                GameDrawPaths.players[1].xMovingDirection = 1;
                break;
            case 38:
                GameDrawPaths.players[1].yMovingDirection = -1;
                break;
            case 40:
                GameDrawPaths.players[1].yMovingDirection = 1;
                break;
        }
        switch (_event.keyCode) {
            case 87:
                GameDrawPaths.players[0].yMovingDirection = -1;
                break;
            case 65:
                GameDrawPaths.players[0].xMovingDirection = -1;
                break;
            case 83:
                GameDrawPaths.players[0].yMovingDirection = 1;
                break;
            case 68:
                GameDrawPaths.players[0].xMovingDirection = 1;
                break;
        }
    }
    GameDrawPaths.handleKeyDown = handleKeyDown; //handleKeyDown zu
    //wenn irgendeine Taste hochgeht: die entsprechenden Tasten abfragen und die Bewegung stoppen
    function handleKeyUp(_event) {
        switch (_event.keyCode) {
            case 37: //left arrow
            case 39:
                GameDrawPaths.players[1].xMovingDirection = 0;
                break;
            case 38: //up arrow
            case 40:
                GameDrawPaths.players[1].yMovingDirection = 0;
                break;
        }
        switch (_event.keyCode) {
            case 65: //key a
            case 68:
                GameDrawPaths.players[0].xMovingDirection = 0;
                break;
            case 87: //key w
            case 83:
                GameDrawPaths.players[0].yMovingDirection = 0;
                break;
        }
    }
    GameDrawPaths.handleKeyUp = handleKeyUp; //handleKeyUp zu
})(GameDrawPaths || (GameDrawPaths = {})); //close Namespace
//# sourceMappingURL=HandleListener.js.map