namespace GameDrawPaths {
    window.onkeydown = handleKeyDown;
    window.onkeyup = handleKeyUp;

    //wenn irgendeine Taste gedückt wird: über switch abfragen, welche Taste und somit jeweilige Funktion aufrufen bzw. Wert ändern
    export function handleKeyDown(_event: KeyboardEvent): void {

        switch (_event.keyCode) {

            case 37: //left arrow
                players[1].xMovingDirection = - 1;
                break;
            case 39: //right arrow
                players[1].xMovingDirection = 1;
                break;
        }
        switch (_event.keyCode) {

            case 38: //up arrow
                players[1].yMovingDirection = - 1;
                break;
            case 40: //down arrow
                players[1].yMovingDirection = 1;
                break;
        }

        switch (_event.keyCode) {
            case 87: // key w
                players[0].yMovingDirection = - 1;
                break;
            case 65: // key a
                players[0].xMovingDirection = - 1;
                break;
            case 83: //key s
                players[0].yMovingDirection = 1;
                break;
            case 68: //key d
                players[0].xMovingDirection = 1;
                break;
        }


    } //handleKeyDown zu

    //wenn irgendeine Taste hochgeht: die entsprechenden Tasten abfragen und die Bewegung stoppen
    export function handleKeyUp(_event: KeyboardEvent): void {

        switch (_event.keyCode) {
            case 37: //left arrow
            case 39: //right arrow
                players[1].xMovingDirection = 0;
                break;

            case 38: //up arrow
            case 40: //down arrow
                players[1].yMovingDirection = 0;
                break;
        }

        switch (_event.keyCode) {

            case 65: //key a
            case 68: //key d
                players[0].xMovingDirection = 0;
                break;

            case 87: //key w
            case 83: //key s
                players[0].yMovingDirection = 0;
                break;
        }


    } //handleKeyUp zu
} //close Namespace