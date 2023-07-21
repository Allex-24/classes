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
});
