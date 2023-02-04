import Character from "../Character";
import Magician from "../Magician";
import Daemon from "../Daemon";
import Swordsman from "../Swordsman";
import Zombie from "../Zombie";
import Undead from "../Undead";
import Bowman from "../Bowman";

test("Тестирование создания объекта класса Daemon", () => {
  const exp = {
    name: "Aleks",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  const resolve = new Daemon("Aleks");
  expect(resolve).toEqual(exp);
});

test("LevelUp method test", () => {
  const exp = {
    name: "Aleks",
    type: "Daemon",
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  };

  const resolve = new Daemon("Aleks");
  resolve.levelUp();
  expect(resolve).toEqual(exp);
});

test("damage method test", () => {
  const exp = {
    name: "Aleks",
    type: "Daemon",
    health: 94,
    level: 1,
    attack: 10,
    defence: 40
  };

  const resolve = new Daemon("Aleks");
  resolve.damage(10);
  expect(resolve).toEqual(exp);
});

test("Тестирование создания объекта класса Bowman", () => {
  const exp = {
    name: "Aleks",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  const resolve = new Bowman("Aleks");
  expect(resolve).toEqual(exp);
});

test("Тестирование создания объекта класса Magician", () => {
  const exp = {
    name: "Dmitriy",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const resolve = new Magician("Dmitriy");
  expect(resolve).toEqual(exp);
});
test("Тестирование создания объекта класса Swordsman", () => {
  const exp = {
    name: "Hellfire",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const resolve = new Swordsman("Hellfire");
  expect(resolve).toEqual(exp);
});
test("Тестирование создания объекта класса Undead", () => {
  const exp = {
    name: "Dmitriy",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const resolve = new Undead("Dmitriy");
  expect(resolve).toEqual(exp);
});
test("Тестирование создания объекта класса Zombie", () => {
  const exp = {
    name: "Dmitriy",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const resolve = new Zombie("Dmitriy");
  expect(resolve).toEqual(exp);
});

test("uncorrect name character", () => {
  expect(() => new Daemon("A")).toThrowError(
    new Error("Длина имени должна быть не менее 2-ух и не более 10-ти символов"),
  );
});

test("uncorrect type character", () => {
  expect(() => new Character("Anatoly", "Druid")).toThrowError(
    new Error("Некорректный тип персонажа"),
  );
});
