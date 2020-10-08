class Weapon {
	constructor(weapon) {		
		this.name = weapon.name;
		this.attack = weapon.attack;
		this.durability = weapon.durability;
		this.maxDurability = this.durability;
		this.range = weapon.range;
	}

	takeDamage(damage) {
		this.durability -= damage;
    if (this.durability < 0) {this.durability = 0;}
	}

  getDamage() {
    if (this.durability === 0) {return 0}
    else if (this.durability >= this.maxDurability * 0.3) {return this.attack} 
    else {return this.attack / 2};
  }

  isBroken() {
    if (this.durability > 0) {return false}
    else {return true}
  }

}

// Обычное оружие
class Arm extends Weapon {
  constructor() {
    super({
    	name: "Рука",
    	attack: 1,
    	durability: Infinity,
    	range: 1
    });
  }
 }

 class Bow extends Weapon {
    constructor() {
      super({
      	name: "Лук",
      	attack: 10,
      	durability: 200,
      	range: 3
      });
    }
   }

   class Sword extends Weapon {
    constructor() {
      super({
      	name: "Меч",
      	attack: 25,
      	durability: 500,
      	range: 1
      });
    }
   }

   class Knife extends Weapon {
    constructor() {
      super({
      	name: "Нож",
      	attack: 5,
      	durability: 300,
      	range: 1
      });
    }
   }

   class Staff extends Weapon {
    constructor() {
      super({
      	name: "Посох",
      	attack: 8,
      	durability: 300,
      	range: 2
      });
    }
   }



   // Усиленное оружие
   class LongBow extends Bow {
    constructor() {
      super();
      this.name = "Длинный лук";
      this.attack = 15;
      this.range = 4;
    }
   }

   class Axe extends Sword {
    constructor() {
      super();
      this.name = "Секира";
      this.attack = 27;
      this.durability = 800;
    }
   }

   class StormStaff extends Staff {
    constructor() {
      super();
      this.name = "Посох бури";
      this.attack = 10;
      this.range = 3;
    }
   }



const arm2 =  new Arm();
arm2.getDamage(20);
console.log(arm2.durability);

const bow2  =  new Bow();
const sword2 = new Sword();
const knife2 = new Knife();
const staff2 = new Staff();

const longBow2    = new LongBow();
const axe2         = new Axe();
const staffStorm2 = new StormStaff();

console.log(arm.durability);
arm.takeDamage(5);
console.log(arm.durability);

console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);

console.log(arm2);
console.log(bow2);
console.log(sword2);
console.log(knife2);
console.log(staff2);

console.log(longBow2);
console.log(axe2);
console.log(staffStorm2);
