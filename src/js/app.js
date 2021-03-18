export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    if (typeof this.name !== 'string' && this.name.length > 2 && this.name.length < 10) {
      throw new Error('Ошибка. Некорректное значение');
    }

    if (this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Ошибка. Не выбран тип');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Ошибка. Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - defence / 100);
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 100, 1, 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 100, 1, 40, 10);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 25, 25);
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 100, 1, 40, 10);
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 100, 1, 10, 40);
  }
}
