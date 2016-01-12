var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");
    if(name.length > 15) alert("Wow that's a long name");
    return name;
};

function tryTwoPointShot(){
    var random1 = Math.random();
    var random2  = Math.random();
    if(random1 > 0.2 && random2 > 0.2) return true;
    return false;
}

