let getBountyHunterData = (opponent) => {
    createBountyHunter();
    getBountyHunterWeaponInfo(bountyHunter.equipWeapon);

    damage = getRandomInt(bountyHunterWeapon.minDamage, bountyHunterWeapon.maxDamage);
    let toHitMod = getRandomInt(1, 10);

    bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - opponent["combatDefense"];
    bhDefenseTotal = bountyHunter.combatDefense - opponent["combatOffense"] - getRandomInt(1, 20);

    document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
    document.getElementById("bhGetHitChance").innerHTML = bhDefenseTotal.toString();
    document.getElementById("bhFirstName").innerHTML = bountyHunter.firstName;
    document.getElementById("bhLastName").innerHTML = bountyHunter.lastName;
    document.getElementById("bhHealth").innerHTML = bountyHunter.health.toString();

};

let attack = (opponent, number) => {

    document.getElementById("bhHealth").innerHTML = bountyHunter.health;
    document.getElementById("health").innerHTML = opponent["health"];
    if (bountyHunter.health < 0) {
        window.location.href = "gameOver.html"
    }
    if (opponent["health"] < 0 && bountyHunter.health >= 0) {
        window.location.href = "bar1.html";
        money = parseInt(sessionStorage.getItem("money"));
        money = money + 800;
        sessionStorage.setItem("money", money.toString());
    }
    if (bhOffenseTotal > 0) {
        opponent["health"] -= damage;
        let toHitMod = getRandomInt(1, 10);

        bhOffenseTotal = bountyHunter.combatOffense + toHitMod + bountyHunterWeapon.toHitModifier - opponent["combatDefense"];
        document.getElementById("bhHitChance").innerHTML = bhOffenseTotal.toString();
        return bhOffenseTotal;
    }
}