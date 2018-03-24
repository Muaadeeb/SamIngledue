window.onload = function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        case "bhIndex.html":
            break;
        case "bhPurchaseItems.html":
            createBountyHunter();
            break;
        case "rodianNo1":
            money = parseInt(sessionStorage.getItem("money"));
            money = money + 300;
            sessionStorage.setItem("money", money.toString());
            break;
        case "bhEquipGear.html":
            loadWeapons();
            break;
        case "rodianYes1.html":
            rehalRodian = new opponent("Rehal", "Madar", 10, 5, 10);
            getBountyHunterData(rehalRodian);
            document.getElementById("firstName").innerHTML = rehalRodian["firstName"].toString();
            document.getElementById("lastName").innerHTML = rehalRodian["lastName"].toString();
            document.getElementById("combatOffense").innerHTML = rehalRodian["combatOffense"].toString();
            document.getElementById("combatDefense").innerHTML = rehalRodian["combatDefense"].toString();
            document.getElementById("health").innerHTML = rehalRodian["health"].toString();
            break;
        case "ratCave1.html":
            rat1 = new opponent("Rat", "Watson", 5, 5, 5);
            rat2 = new opponent("Rat", "Sandwich", 5, 5, 5);
            rat3 = new opponent("Rat", "Sandwich", 5, 5, 5);
            rat4 = new opponent("Rat", "Sandwich", 5, 5, 5);
            getBountyHunterData(rat1);
            document.getElementById("firstName1").innerHTML = rat1["firstName"].toString();
            document.getElementById("lastName1").innerHTML = rat1["lastName"].toString();
            document.getElementById("combatOffense1").innerHTML = rat1["combatOffense"].toString();
            document.getElementById("combatDefense1").innerHTML = rat1["combatDefense"].toString();
            document.getElementById("health1").innerHTML = rat1["health"].toString();
            document.getElementById("firstName2").innerHTML = rat2["firstName"].toString();
            document.getElementById("lastName2").innerHTML = rat2["lastName"].toString();
            document.getElementById("combatOffense2").innerHTML = rat2["combatOffense"].toString();
            document.getElementById("combatDefense2").innerHTML = rat2["combatDefense"].toString();
            document.getElementById("health2").innerHTML = rat2["health"].toString();
            document.getElementById("firstName3").innerHTML = rat3["firstName"].toString();
            document.getElementById("lastName3").innerHTML = rat3["lastName"].toString();
            document.getElementById("combatOffense3").innerHTML = rat3["combatOffense"].toString();
            document.getElementById("combatDefense3").innerHTML = rat3["combatDefense"].toString();
            document.getElementById("health3").innerHTML = rat3["health"].toString();
            document.getElementById("firstName4").innerHTML = rat4["firstName"].toString();
            document.getElementById("lastName4").innerHTML = rat4["lastName"].toString();
            document.getElementById("combatOffense4").innerHTML = rat4["combatOffense"].toString();
            document.getElementById("combatDefense4").innerHTML = rat4["combatDefense"].toString();
            document.getElementById("health4").innerHTML = rat4["health"].toString();
            break;
        default:
            break;
    }
};
function opponent(firstName, lastName, combatOffense, combatDefense, health) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.health = health;
}
;
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
var rodianNo1 = function () {
    window.location.href = "rodianNo1.html";
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