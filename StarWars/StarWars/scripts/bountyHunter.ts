let bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);
let weaponInventory = [];
let armorInventory = [];
let itemsInventory = [];
let equipedWeapon = [];
let money = 0;
let rehalRodian = [];
let rat1 = [];
let rat2 = [];
let rat3 = [];
let rat4 = [];
let weaponAttackBonus = 0;
let weaponRateOfFire = 0;
let bhOffenseTotal = 0;
let bhDefenseTotal = 0;
let damage = 0;

let credits = () => {
    money = parseInt(sessionStorage.getItem("money"));
    document.getElementById("money").innerHTML = money.toString();
    document.getElementById("moneypic").style.visibility = "visible";
};
function BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health) {
    let _this = this;
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

let adjustCharacterCreationPoints = () => {
    let totalCCP = totalCharacterCreationPointsSpent();
    document.getElementById("pointsSpent").innerHTML = totalCCP.toString();
    if (totalCCP > 100) {
        alert("You have over spent.  Please adjust your point spend.");
    }
};
let totalCharacterCreationPointsSpent = () => {
    let ccp1 = parseInt(document.getElementById("combatOffense")["value"]);
    let ccp2 = parseInt(document.getElementById("combatDefense")["value"]);
    let ccp3 = parseInt(document.getElementById("luck")["value"]);
    let ccp4 = parseInt(document.getElementById("gamble")["value"]);
    let ccp5 = parseInt(document.getElementById("hack")["value"]);
    let ccp6 = parseInt(document.getElementById("health")["value"]);
    return ccp1 + ccp2 + ccp3 + ccp4 + ccp5 + ccp6;
};
