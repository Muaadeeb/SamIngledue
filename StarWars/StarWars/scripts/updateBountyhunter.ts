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

let getBountyHunterWeaponInfo = function (weaponName) {
    for (let i = 0; i <= weapons.length; i++) {
        for (let x = 0; x < weapons[i].length; x++) {
            if (weapons[i][x] === weaponName) {
                bountyHunterWeapon = new Weapon(weapons[i][0], weapons[i][1], weapons[i][2], weapons[i][3],
                    weapons[i][4], weapons[i][5], weapons[i][6], weapons[i][7]);
                return;
            }
        }
    }
}