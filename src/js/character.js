export default class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Name must be a string with length between 2 and 10 characters.");
    }

    const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if (!validTypes.includes(type)) {
      throw new Error("Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    // Set default attack and defence values based on type
    const characterStats = {
      Bowman: { attack: 25, defence: 25 },
      Swordsman: { attack: 40, defence: 10 },
      Magician: { attack: 10, defence: 40 },
      Undead: { attack: 25, defence: 25 },
      Zombie: { attack: 40, defence: 10 },
      Daemon: { attack: 10, defence: 40 },
    };

    this.attack = characterStats[type].attack;
    this.defence = characterStats[type].defence;
  }
}
