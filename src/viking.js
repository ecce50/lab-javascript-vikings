// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  // Redefining the receiveDamage method for the specific Viking class
  receiveDamage(damage) {
    // Referencing the class, saying "This is what this method means here"
    super.receiveDamage(damage); // Calling on the method in the parent class
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const saxonID = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingID = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[saxonID].receiveDamage(this.vikingArmy[vikingID].strength);
    if (this.saxonArmy[saxonID].health <= 0) {
      this.saxonArmy.splice(saxonID, 1);
      return `A Saxon has died in combat`;
    }
  }

  saxonAttack() {
    const saxonID = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingID = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[vikingID].receiveDamage(this.saxonArmy[saxonID].strength);
    if (this.vikingArmy[vikingID].health <= 0) {
      this.vikingArmy.splice(vikingID, 1);
    }
    return `Harald has received 25 points of damage`;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
