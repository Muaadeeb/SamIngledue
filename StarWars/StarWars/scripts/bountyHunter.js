var weapons = [["Weapon", "Range", "Min Damage", "Max Damage", "Weight", "Attack Modifier", "Rate of Fire", "Cost"],
    ["Blaster Pistol", "Short", 1, 8, 5, 0, 2, 300], ["Blaster Rifle", "Medium", 1, 10, 8, 5, 2, 650],
    ["Blaster Sniper", "Long", 3, 18, 10, 10, 1, 1200], ["Vibro Blade", "Melee", 1, 6, 3, 0, 1, 50], ["Throwing Knife", "Short", 1, 4, 1, 0, 1, 25]];
var armor = [["Light", 10, 1, 50, 120], ["Medium", 25, 3, 100, 375], ["Heavy", 75, 5, 150, 1200]];
var items = [["To Be Determined - Item 1", 0], ["To Be Determined - Item 2", 0]];
var bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);
var bountyHunterWeapon = new Weapon(null, null, null, null, null, null, null, null);
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
window.onload = function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch (page) {
        case "bhIndex.html":
            break;
        case "bhPurchaseItems.html":
            createBountyHunter();
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
            rat1 = new opponent("Rat", "Sandwich", 5, 5, 5);
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
//let loadRodianYes1 = () => {
//    let rehalRodian = ["health", "attack", "defense"];
//    rehalRodian["health"] = 10;
//    rehalRodian["attack"] = 5;
//    rehalRodian["defense"] = 10;
//
//    document.getElementById("rehalRodianHealth").innerHTML = rehalRodian["health"].toString();
//}
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
var captureBountyHunterData = function () {
    var firstName = document.getElementById("firstName")["value"];
    var lastName = document.getElementById("lastName")["value"];
    var age = parseInt(document.getElementById("age")["value"]);
    var combatOffense = parseInt(document.getElementById("combatOffense")["value"]);
    var combatDefense = parseInt(document.getElementById("combatDefense")["value"]);
    var luck = parseInt(document.getElementById("luck")["value"]);
    var gamble = parseInt(document.getElementById("gamble")["value"]);
    var hack = parseInt(document.getElementById("hack")["value"]);
    var health = parseInt(document.getElementById("health")["value"]);
    var bountyHunter = new BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health);
    sessionStorage.setItem("bountyHunter", JSON.stringify(bountyHunter));
    window.location.href = "bhPurchaseItems.html";
};
var createBountyHunter = function () {
    var bh = JSON.parse(sessionStorage.getItem("bountyHunter"));
    bountyHunter = new BountyHunter(bh.firstName, bh.lastName, bh.age, bh.combatOffense, bh.combatDefense, bh.luck, bh.gamble, bh.hack, bh.health);
    bountyHunter.firstName = bh.firstName;
    bountyHunter.lastName = bh.lastName;
    bountyHunter.age = bh.age;
    bountyHunter.combatOffense = bh.combatOffense;
    bountyHunter.combatDefense = bh.combatDefense;
    bountyHunter.luck = bh.luck;
    bountyHunter.gamble = bh.gamble;
    bountyHunter.hack = bh.hack;
    bountyHunter.health = bh.health;
    bountyHunter.equipWeapon(sessionStorage.getItem("equipedWeapon"));
    //bountyHunter.equipWeapon(getBountyHunterWeaponInfo(sessionStorage.getItem("equipedWeapon")));
    //^.equipWeapon is no longer function check it out in bountyHunter function
    //bountyHunter.equipArmor();
    //bountyHunter.equipItems();
};
//let testOnly = () => {
//    const helloWorld = true;
//    let someValue = JSON.parse(sessionStorage.getItem("bountyHunter"));
//}
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
var getBountyHunterData = function (opponent) {
    createBountyHunter();
    getBountyHunterWeaponInfo(bountyHunter.equipWeapon);
    damage = getRandomInt(bountyHunterWeapon.minDamage, bountyHunterWeapon.maxDamage);
    var toHitMod = getRandomInt(1, 10);
    bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - opponent["combatDefense"];
    bhDefenseTotal = bountyHunter.combatDefense - opponent["combatOffense"] - getRandomInt(1, 20);
    document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
    document.getElementById("bhGetHitChance").innerHTML = bhDefenseTotal.toString();
    document.getElementById("bhFirstName").innerHTML = bountyHunter.firstName;
    document.getElementById("bhLastName").innerHTML = bountyHunter.lastName;
    document.getElementById("bhHealth").innerHTML = bountyHunter.health.toString();
};
var attack = function (opponent, number) {
    //for (number = 0; number <= 0; number++) {
    //    if (bhDefenseTotal <= 0) {
    //        bountyHunter.health += bhDefenseTotal;
    //    }
    //}
    document.getElementById("bhHealth").innerHTML = bountyHunter.health;
    document.getElementById("health").innerHTML = opponent["health"];
    if (bountyHunter.health < 0) {
        window.location.href = "gameOver.html";
    }
    if (opponent["health"] < 0 && bountyHunter.health >= 0) {
        window.location.href = "bar1.html";
        money = parseInt(sessionStorage.getItem("money"));
        money = money + 800;
        sessionStorage.setItem("money", money.toString());
    }
    if (bhOffenseTotal > 0) {
        opponent["health"] -= damage;
        var toHitMod = getRandomInt(1, 10);
        bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - opponent["combatDefense"];
        document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
        return bhOffenseTotal;
    }
};
var getBountyHunterWeaponInfo = function (weaponName) {
    for (var i = 0; i <= weapons.length; i++) {
        for (var x = 0; x < weapons[i].length; x++) {
            if (weapons[i][x] === weaponName) {
                //name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost
                bountyHunterWeapon = new Weapon(weapons[i][0], weapons[i][1], weapons[i][2], weapons[i][3], weapons[i][4], weapons[i][5], weapons[i][6], weapons[i][7]);
                return;
            }
        }
    }
};
var savePurchasedGear = function () {
    sessionStorage.setItem("weaponInventory", JSON.stringify(weaponInventory));
    window.location.href = "bhEquipGear.html";
    sessionStorage.setItem("money", money.toString());
};
var saveEquipedGear = function () {
    // weapons, armor, items.
    var ew = document.getElementById("weaponEquiped")["value"];
    sessionStorage.setItem("equipedWeapon", ew);
    window.location.href = "bhContract.html";
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
var rodianNo1 = function () {
    window.location.href = "rodianNo1.html";
    money = parseInt(sessionStorage.getItem("money"));
    money = money + 300;
    sessionStorage.setItem("money", money.toString());
};
var credits = function () {
    money = parseInt(sessionStorage.getItem("money"));
    document.getElementById("money").innerHTML = money.toString();
    document.getElementById("moneypic").style.visibility = "visible";
};
var rodianYes1 = function () {
    window.location.href = "rodianYes1.html";
};
var bar = function () {
    window.location.href = "bar.html";
};
//let purchaseEquipment = () => {
//    let result = ["<table border=1>"];
//    let count = 0;
//    for (let row of weapons) {
//        result.push("<tr>");
//        for (let cell of row) {
//            if (count !== 0) {
//                result.push(`<td>${cell}</td>`);
//            } else {
//                result.push(`<td><strong>${cell}</strong></td>`);
//            }
//        }
//        result.push("</tr>");
//        count++;
//    }
//    result.push("</table>");
//    return document.getElementById("purchaseEquipment").innerHTML = result.join("\n");
//}
//function get_table(data) {
//    let result = ["<table border=1'>"];
//    for (let row of data) {
//        result.push("<tr>");
//        for (let cell of row) {
//            result.push(`<td>${cell}</td>`);
//        }
//        result.push("</tr>");
//    }
//    result.push("</table>");
//    return result.join('\n');
//}
////bountyHunter.equipWeapon(blasterPistol);
////bountyHunter.equipArmor(mandalorianPlate);
//let combatEngine = () => {
//    let hit = calcToHit();
//    if (hit) {
//        //calcDamage();
//    }
//}
// since we are going to be using numeric values a good practice would be to add a NaN check. (Not done below).
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
//# sourceMappingURL=bountyHunter.js.map 
//# sourceMappingURL=bountyHunter.js.map