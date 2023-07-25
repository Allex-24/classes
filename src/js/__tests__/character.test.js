import Character from '../character';

describe('Character class', () => {
  test('Create a valid character', () => {
    const character = new Character('John', 'Swordsman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
  });

  test('Invalid name should throw an error', () => {
    expect(() => new Character('A', 'Magician')).toThrow('Name must be a string with length between 2 and 10 characters.');
  });

  test('Invalid type should throw an error', () => {
    expect(() => new Character('Alice', 'Warrior')).toThrow('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('Character should level up correctly', () => {
    const character = new Character('John', 'Swordsman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(48); // 40 + (40 * 0.2)
    expect(character.defence).toBe(12); // 10 + (10 * 0.2)
    expect(character.health).toBe(100);
  });

  test('Leveling up a dead character should throw an error', () => {
    const character = new Character('John', 'Swordsman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Cannot level up a dead character.');
  });

  test('Character should take damage correctly', () => {
    const character = new Character('John', 'Swordsman');
    character.damage(20);
    expect(character.health).toBe(98); // 100 - (20 * (1 - 0.1))
  });

  test('Damaging a dead character should throw an error', () => {
    const character = new Character('John', 'Swordsman');
    character.health = 0;
    expect(() => character.damage(20)).toThrow('Cannot damage a dead character.');
  });

  test('Character should not have negative health', () => {
    const character = new Character('John', 'Swordsman');
    character.damage(200);
    expect(character.health).toBe(0);
  });
});
