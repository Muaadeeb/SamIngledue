let weapons = [["Weapon", "Range", "Min Damage", "Max Damage", "Weight", "Attack Modifier", "Rate of Fire", "Cost"],
 ["Blaster Pistol", "Short", 1, 8, 5, 0, 2, 300], ["Blaster Rifle", "Medium", 1, 10, 8, 5, 2, 650],
  ["Blaster Sniper", "Long", 3, 18, 10, 10, 1, 1200], ["Vibro Blade", "Melee", 1, 6, 3, 0, 1, 50], ["Throwing Knife", "Short", 1, 4, 1, 0, 1, 25]];
let armor = [["Light", 10, 1, 50, 120], ["Medium", 25, 3, 100, 375], ["Heavy", 75, 5, 150, 1200]];
let items = [["To Be Determined - Item 1", 0], ["To Be Determined - Item 2", 0]];
let bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);
let bountyHunterWeapon = new Weapon(null, null, null, null, null, null, null, null);
let weaponInventory = [];
let armorInventory = [];
let itemsInventory = [];
let equipedWeapon = [];
let money = 0;
let rehalRodian = [];
let weaponAttackBonus = 0;
let weaponRateOfFire = 0;
let bhOffenseTotal = 0;
let bhDefenseTotal = 0;
let damage = 0;

window.onload = () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
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
            getBountyHunterData();

            document.getElementById("firstName").innerHTML = rehalRodian["firstName"].toString();
            document.getElementById("lastName").innerHTML = rehalRodian["lastName"].toString();
            document.getElementById("combatOffense").innerHTML = rehalRodian["combatOffense"].toString();
            document.getElementById("combatDefense").innerHTML = rehalRodian["combatDefense"].toString();
            document.getElementById("health").innerHTML = rehalRodian["health"].toString();

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
};

//let loadRodianYes1 = () => {
//    let rehalRodian = ["health", "attack", "defense"];
//    rehalRodian["health"] = 10;
//    rehalRodian["attack"] = 5;
//    rehalRodian["defense"] = 10;
//
//    document.getElementById("rehalRodianHealth").innerHTML = rehalRodian["health"].toString();
//}
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
let captureBountyHunterData = () => {
    let firstName = document.getElementById("firstName")["value"];
    let lastName = document.getElementById("lastName")["value"];
    let age = parseInt(document.getElementById("age")["value"]);
    let combatOffense = parseInt(document.getElementById("combatOffense")["value"]);
    let combatDefense = parseInt(document.getElementById("combatDefense")["value"]);
    let luck = parseInt(document.getElementById("luck")["value"]);
    let gamble = parseInt(document.getElementById("gamble")["value"]);
    let hack = parseInt(document.getElementById("hack")["value"]);
    let health = parseInt(document.getElementById("health")["value"]);
    let bountyHunter = new BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health);
    sessionStorage.setItem("bountyHunter", JSON.stringify(bountyHunter));
    window.location.href = "bhPurchaseItems.html";
};
let createBountyHunter = () => {
    let bh = JSON.parse(sessionStorage.getItem("bountyHunter"));
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
    bountyHunter.equipWeapon(sessionStorage.getItem("equipedWeapon"))

    //bountyHunter.equipWeapon(getBountyHunterWeaponInfo(sessionStorage.getItem("equipedWeapon")));


    //^.equipWeapon is no longer function check it out in bountyHunter function
    //bountyHunter.equipArmor();
    //bountyHunter.equipItems();
};
//let testOnly = () => {
//    const helloWorld = true;
//    let someValue = JSON.parse(sessionStorage.getItem("bountyHunter"));
//}
let buyWeapon = function (weapon) {
    for (let i = 0; i <= weapons.length; i++) {
        for (let x = 0; x <= 7; x++) {
            if (weapons[i][x] === weapon) {
                let weaponCost = weapons[i][7].toString();
                let cost = parseInt(weaponCost);
                let money = parseInt(document.getElementById("money").innerHTML);
                if (money >= cost) {
                    money = money - cost;
                    document.getElementById("money").innerHTML = money.toString();
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

let loadWeapons = () => {
    weaponInventory = JSON.parse(sessionStorage.getItem("weaponInventory"));
    let select = document.getElementById("weaponEquiped");
    for (let i = 0; i <= weaponInventory.length; i++) {
        if (weaponInventory[i] !== null) {
            let opt = weaponInventory[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
    }
};

let getBountyHunterData = () => {
    createBountyHunter();
    getBountyHunterWeaponInfo(bountyHunter.equipWeapon);
               
    damage = getRandomInt(bountyHunterWeapon.minDamage, bountyHunterWeapon.maxDamage);
    let toHitMod = getRandomInt(1, 10);

    bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - rehalRodian["combatDefense"];
    bhDefenseTotal = bountyHunter.combatDefense - rehalRodian["combatOffense"] - getRandomInt(1, 20);

    document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
    document.getElementById("bhGetHitChance").innerHTML = bhDefenseTotal.toString();
    document.getElementById("bhFirstName").innerHTML = bountyHunter.firstName;
    document.getElementById("bhLastName").innerHTML = bountyHunter.lastName;
    document.getElementById("bhHealth").innerHTML = bountyHunter.health.toString();

};
let attack = () => {
    if (bhDefenseTotal <= 0) {
         bountyHunter.health += bhDefenseTotal;
    }
    document.getElementById("bhHealth").innerHTML = bountyHunter.health;
    document.getElementById("health").innerHTML = rehalRodian["health"];
    if (bountyHunter.health < 0) {
        window.location.href = "gameOver.html"
    }
    if (rehalRodian["health"] < 0 && bountyHunter.health >= 0) {
        window.location.href = "bar1.html";
        money = parseInt(sessionStorage.getItem("money"));
        money = money + 800;
        sessionStorage.setItem("money", money.toString());
    }
    if (bhOffenseTotal > 0) {
        rehalRodian["health"] -= damage;
        let toHitMod = getRandomInt(1, 10);

        bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - rehalRodian["combatDefense"];
        document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
        return bhOffenseTotal;
    }
}

let getBountyHunterWeaponInfo = function (weaponName) {
    for (let i = 0; i <= weapons.length; i++) {
        for (let x = 0; x < weapons[i].length; x++) {
            if (weapons[i][x] === weaponName) {
                //name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost
                bountyHunterWeapon = new Weapon(weapons[i][0], weapons[i][1], weapons[i][2], weapons[i][3],
                    weapons[i][4], weapons[i][5], weapons[i][6], weapons[i][7]);
                return;
            }
        }
    }
}



let savePurchasedGear = () => {
    sessionStorage.setItem("weaponInventory", JSON.stringify(weaponInventory));
    window.location.href = "bhEquipGear.html";
    sessionStorage.setItem("money", money.toString());
};

let saveEquipedGear = () => {
    // weapons, armor, items.
    let ew = document.getElementById("weaponEquiped")["value"];
    sessionStorage.setItem("equipedWeapon", ew);
    window.location.href = "bhContract.html";
};

let rodianYes = () => {
    window.location.href = "rodianYes.html";
};

let rodianNo = () => {
    window.location.href = "rodianNo.html";
};

let rodianNo1 = () => {
    window.location.href = "rodianNo1.html";
    money = parseInt(sessionStorage.getItem("money"));
    money = money + 300;
    sessionStorage.setItem("money", money.toString());
};

let credits = () => {
    money = parseInt(sessionStorage.getItem("money"));
    document.getElementById("money").innerHTML = money.toString();
    document.getElementById("moneypic").style.visibility = "visible";
};

let rodianYes1 = () => {
    window.location.href = "rodianYes1.html";
};

let bar = () => {
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

//# sourceMappingURL=bountyHunter.js.map