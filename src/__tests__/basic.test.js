import { sortHeroesByHealth } from '../basic';

  describe('Sorting Heroes by Health', () => {
    test('Sorts heroes in descending order of health', () => {
      const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ];
  
      const sortedHeroes = sortHeroesByHealth(heroes);
  
      expect(sortedHeroes).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ]);
    });
  });