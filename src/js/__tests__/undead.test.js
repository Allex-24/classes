import Undead from '../undead';

describe('Undead class', () => {
  test('Create a valid Undead', () => {
    const undead = new Undead('Dark King');
    expect(undead.name).toBe('Dark King');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});
