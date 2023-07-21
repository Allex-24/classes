import Zombie from '../zombie';

describe('Zombie class', () => {
  test('Create a valid Zombie', () => {
    const zombie = new Zombie('Zack');
    expect(zombie.name).toBe('Zack');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
