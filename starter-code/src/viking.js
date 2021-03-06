// Soldier
function Soldier (healthArg, strengthArg) {
  this.health = healthArg
  this.strength = strengthArg

  this.attack = function(){
    return this.strength
  }

  this.receiveDamage = function(damage){
    this.health -= damage
  }
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
  this.name = nameArg

  this.receiveDamage = function(damage){
    this.health -= damage
    if(this.health > 0){
      return this.name + " has received " + damage + " points of damage"
    } else {
      return this.name + " has died in act of combat"
    }
  }
  this.battleCry = function(){
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking;


// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
  this.receiveDamage = function(damage){
    this.health -= damage
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage"
    } else {
      return "A Saxon has died in combat"
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []

  this.addViking = function(viking){
    this.vikingArmy.push(viking)
  }

  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon)
  }

  this.vikingAttack = function(){
    vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)


    viking = this.vikingArmy[vikingIndex]
    saxon = this.saxonArmy[saxonIndex]

    result = saxon.receiveDamage(viking.strength)

    if(saxon.health <= 0){
      this.saxonArmy.splice(saxonIndex, 1)
    }

    return result

  }

  this.saxonAttack = function(){
    vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)


    viking = this.vikingArmy[vikingIndex]
    saxon = this.saxonArmy[saxonIndex]

    result = viking.receiveDamage(saxon.strength)

    if(viking.health <= 0){
      this.vikingArmy.splice(saxonIndex, 1)
    }

    return result
  }

  this.showStatus = function(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }

    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }

    return "Vikings and Saxons are still in the thick of battle."
  }

}
