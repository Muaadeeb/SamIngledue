var weapons = [["Weapon", "Range", "Min Damage", "Max Damage", "Weight", "Attack Modifier", "Rate of Fire", "Cost"],
    ["Blaster Pistol", "Short", 1, 8, 5, 0, 2, 300], ["Blaster Rifle", "Medium", 1, 10, 8, 5, 2, 650],
    ["Blaster Sniper", "Long", 3, 18, 10, 10, 1, 1200], ["Vibro Blade", "Melee", 1, 6, 3, 0, 1, 50], ["Throwing Knife", "Short", 1, 4, 1, 0, 1, 25]];
var armor = [["Light", 10, 1, 50, 120], ["Medium", 25, 3, 100, 375], ["Heavy", 75, 5, 150, 1200]];
var items = [["To Be Determined - Item 1", 0], ["To Be Determined - Item 2", 0]];
var bountyHunterWeapon = new Weapon(null, null, null, null, null, null, null, null);
function Weapon(name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.weight = weight;
    this.toHitModifier = toHitModifier;
    this.rateOfFire = rateOfFire;
    this.cost = cost;
}
function Armor(name, weight, damageReduction, durability, cost) {
    this.name = name;
    this.weight = weight;
    this.damageReduction = damageReduction;
    this.durability = durability;
    this.cost = cost;
}
function Items(name, weight, cost, description) {
    this.name = name;
    this.weight = weight;
    this.cost = cost;
    this.description = description;
}
var loadWeapons = function () {
    weaponInventory = JSON.parse(sessionStorage.getItem("weaponInventory"));
    var select = document.getElementById("weaponEquiped");
    for (var i = 0; i <= weaponInventory.length; i++) {
        if (weaponInventory[i] !== null) {
            var opt = weaponInventory[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
    }
};
var saveEquipedGear = function () {
    var ew = document.getElementById("weaponEquiped")["value"];
    sessionStorage.setItem("equipedWeapon", ew);
    window.location.href = "bhContract.html";
};
var savePurchasedGear = function () {
    sessionStorage.setItem("weaponInventory", JSON.stringify(weaponInventory));
    window.location.href = "bhEquipGear.html";
    sessionStorage.setItem("money", money.toString());
};
var buyWeapon = function (weapon) {
    for (var i = 0; i <= weapons.length; i++) {
        for (var x = 0; x <= 7; x++) {
            if (weapons[i][x] === weapon) {
                var weaponCost = weapons[i][7].toString();
                var cost = parseInt(weaponCost);
                var money_1 = parseInt(document.getElementById("money").innerHTML);
                if (money_1 >= cost) {
                    money_1 = money_1 - cost;
                    document.getElementById("money").innerHTML = money_1.toString();
                    weaponInventory.push(weapon);
                    alert("Purchase successful");
                }
                else {
                    alert("Yo, get a contract Bounty Hunter!  Your money (lack there of) is not good here.");
                }
            }
        }
    }
};
//# sourceMappingURL=Equipment.js.map