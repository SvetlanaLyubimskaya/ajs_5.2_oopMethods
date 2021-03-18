import Character, {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

test('health = 0', () => {
  const bowman = new Bowman('Peter', 'Bowman', 0, 1, 25, 25);
  bowman.levelUp();
  const result = new Error('Ошибка. Нельзя повысить левел умершего');
  expect(bowman.health).not.toBe(result);
});

test('health => 100', () => { // Приводит показатель health к значению 100.
  const undead = new Undead('Kate', 'Undead', 10, 1, 40, 10);
  undead.levelUp();
  const result = 100;
  expect(undead.health).toBe(result);
});

test('level +1', () => { // повышаем уровень на 1
  const undead = new Undead('Kate', 'Undead', 100, 1, 40, 10);
  undead.levelUp();
  const result = 2;
  expect(undead.level).toBe(result);
});

test('attack *20%', () => { // повышаем attack на 20%
  const daemon = new Daemon('Sophie', 'Daemon', 100, 1, 25, 25);
  daemon.levelUp();
  const result = 30;
  expect(daemon.attack).toBe(result);
});

test('defence *20%', () => { // повышаем defence на 20%
  const daemon = new Daemon('Sophie', 'Daemon', 100, 1, 25, 25);
  daemon.levelUp();
  const result = 30;
  expect(daemon.defence).toBe(result);
});
