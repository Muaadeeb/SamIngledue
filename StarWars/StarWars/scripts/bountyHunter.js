var bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);
var weaponInventory = [];
var armorInventory = [];
var itemsInventory = [];
var equipedWeapon = [];
var money = 0;
var rehalRodian = [];
var rat1 = [];
var rat2 = [];
var rat3 = [];
var rat4 = [];
var weaponAttackBonus = 0;
var weaponRateOfFire = 0;
var bhOffenseTotal = 0;
var bhDefenseTotal = 0;
var damage = 0;
var credits = function () {
    money = parseInt(sessionStorage.getItem("money"));
    document.getElementById("money").innerHTML = money.toString();
    document.getElementById("moneypic").style.visibility = "visible";
};
function BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health) {
    var _this = this;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.luck = luck;
    this.gamble = gamble;
    this.hack = hack;
    this.health = health;
    this.equipWeapon = function (weapon) {
        _this.equipWeapon = weapon;
    };
    this.equipArmor = function (armor) {
        _this.equipArmor = armor;
    };
}
var adjustCharacterCreationPoints = function () {
    var totalCCP = totalCharacterCreationPointsSpent();
    document.getElementById("pointsSpent").innerHTML = totalCCP.toString();
    if (totalCCP > 100) {
        alert("You have over spent.  Please adjust your point spend.");
    }
};
var totalCharacterCreationPointsSpent = function () {
    var ccp1 = parseInt(document.getElementById("combatOffense")["value"]);
    var ccp2 = parseInt(document.getElementById("combatDefense")["value"]);
    var ccp3 = parseInt(document.getElementById("luck")["value"]);
    var ccp4 = parseInt(document.getElementById("gamble")["value"]);
    var ccp5 = parseInt(document.getElementById("hack")["value"]);
    var ccp6 = parseInt(document.getElementById("health")["value"]);
    return ccp1 + ccp2 + ccp3 + ccp4 + ccp5 + ccp6;
};
//# sourceMappingURL=bountyHunter.js.map