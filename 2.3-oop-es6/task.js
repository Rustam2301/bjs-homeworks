class Weapon {
	constructor(Weapon) {
		this.name = name;
		this.attack = attack;
		this.dirability = dirability;
		this.range = range;
	}

	takeDamage(damage) {
      if (this.durability === Infinity) {return}
      else if (this.durability > damage) {durability -= damage}
      else {this.durability = 0};
  }

  getDamage() {
    if (this.durability === 0) {return 0}
    else if (this.durability >= 0.3 * this.durability) {return this.attack} 
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
  constructor(name = "Рука", attack = 1, durability = Infinity, range = 1) {
    super(name, attack, durability, range);
  }
 }

 class Bow extends Weapon {
    constructor(name = "Лук", attack = 10, durability = 200, range = 3) {
      super(name, attack, durability, range);
    }
   }

   class Sword extends Weapon {
    constructor(name = "Меч", attack = 25, durability = 500, range = 1) {
      super(name, attack, durability, range);
    }
   }

   class Knife extends Weapon {
    constructor(name = "Нож", attack = 5, durability = 300, range = 1) {
      super(name, attack, durability, range);
    }
   }

   class Staff extends Weapon {
    constructor(name = "Посох", attack = 8, durability = 300, range = 2) {
      super(name, attack, durability, range);
    }
   }

   // Усиленное оружие
   class LongBow extends Bow {
    constructor() {
      super("Длинный лук", 15, undefined, 4);
    }
   }

   class Ax extends Sword {
    constructor() {
      super("Секира", 27, 800, undefined);
    }
   }

   class StaffStorm extends Staff {
    constructor() {
      super("Посох бури", 10, undefined, 3);
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