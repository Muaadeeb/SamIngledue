-function opponent(firstName, lastName, combatOffense, combatDefense, health) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.health = health;
};
var rodianYes = function () {
    window.location.href = "rodianYes.html";
};
var rodianNo = function () {
    window.location.href = "rodianNo.html";
};
var ratCave = function () {
    window.location.href = "ratCave.html";
};
var ratCave1 = function () {
    window.location.href = "ratCave1.html";
};
var calcToHit = function (attackerOffense, attackerLuck, defenderDefense, defenderLuck) {
    var playerAdjustment = favorPlayer();
    var value = valueAdjustment();
    var result = 0;
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
var favorPlayer = function () {
    var favor = Math.floor((Math.random() * 2) + 1);
    var favorPlayer = false;
    if (favor === 2) {
        favorPlayer = true;
    }
    return favorPlayer;
};
var valueAdjustment = function () {
    return Math.floor((Math.random() * 25) + 1);
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var rodianYes1 = function () {
    window.location.href = "rodianYes1.html";
};
var bar = function () {
    window.location.href = "bar.html";
};
//# sourceMappingURL=Navigation.js.map