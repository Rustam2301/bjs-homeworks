class Weapon {
	constructor(Weapon) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.maxDurability = durability;
		this.range = range;
	}

	takeDamage(damage) {
      if (this.durability === Infinity) {return}
      else if (this.durability > damage) {durability -= damage}
      else {this.durability = 0};
  }

  getDamage() {
    if (this.durability === 0) {return 0}
    else if (this.durability >= 0.3 * this.maxDurability) {return this.attack} 
    else {return this.attack / 2};
  }

  isBroken() {
    if (this.durability > 0) {return false}
    else {return true}
  }

}

const arm =  new Weapon("Рука", 1, Infinity, 1);
const bow  =  new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const staff = new Weapon("Посох", 8, 300, 2);

const longBow    = new Weapon("Длинный лук", 15, 200, 4);
const ax         = new Weapon("Секира", 27, 800, 1);
const staffStorm = new Weapon("Посох", 10, 300, 3);

console.log(arm.durability);
arm.takeDamage(5);
console.log(arm.durability);

console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);
bow.takeDamage(200);
console.log(bow.durability);

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

   class Ax extends Sword {
    constructor() {
      super();
      this.name = "Секира";
      this.attack = 27;
      this.durability = 800;
    }
   }

   class StaffStorm extends Staff {
    constructor() {
      super();
      this.name = "Посох бури";
      this.attack = 10;
      this.range = 3;
    }
   }


const arm2 =  new Arm();
const bow2  =  new Bow();
const sword2 = new Sword();
const knife2 = new Knife();
const staff2 = new Staff();

const longBow2    = new LongBow();
const ax2         = new Ax();
const staffStorm2 = new StaffStorm();

console.log(arm2);
console.log(bow2);
console.log(sword2);
console.log(knife2);
console.log(staff2);

console.log(longBow2);
console.log(ax2);
console.log(staffStorm2);