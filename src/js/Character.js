const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
export default class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error(
        "Длина имени должна быть не менее 2-ух и не более 10-ти символов"
      );
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Некорректный тип персонажа");
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health) {
      this.defence = this.defence * 1.2;
      this.attack = this.attack * 1.2;
      this.level = this.level + 1;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error("Нельзя убить умершего");
    }
  }
}
