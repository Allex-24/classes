import Daemon from '../daemon';

describe('Daemon class', () => {
  test('Create a valid Daemon', () => {
    const daemon = new Daemon('Evil Spirit'); // Используйте класс Daemon, а не Character
    expect(daemon.name).toBe('Evil Spirit');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
