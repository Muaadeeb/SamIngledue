-
function opponent(firstName, lastName, combatOffense, combatDefense, health) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.health = health;
};

let rodianYes = () => {
    window.location.href = "rodianYes.html";
};

let rodianNo = () => {
    window.location.href = "rodianNo.html";
};
let ratCave = () => {
    window.location.href = "ratCave.html";
}
let ratCave1 = () => {
    window.location.href = "ratCave1.html";
}
let calcToHit = function (attackerOffense, attackerLuck, defenderDefense, defenderLuck) {
    let playerAdjustment = favorPlayer();
    let value = valueAdjustment();
    let result = 0;
    if (playerAdjustment) {
        result = (attackerOffense + attackerLuck) - (defenderDefense + defenderLuck) + value;
    }
    else {
        result = (attackerOffense + attackerLuck) - (defenderDefense + defenderLuck) - value;
    }
    if (result > 0) {
        return true;
    }
    return false;
};
let favorPlayer = () => {
    let favor = Math.floor((Math.random() * 2) + 1);
    let favorPlayer = false;
    if (favor === 2) {
        favorPlayer = true;
    }
    return favorPlayer;
};
let valueAdjustment = () => {
    return Math.floor((Math.random() * 25) + 1);
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rodianYes1 = () => {
    window.location.href = "rodianYes1.html";
};

let bar = () => {
    window.location.href = "bar.html";
};