const utils = require('./utils');

describe('utils tests', () => {
  describe('sum', () => {
    it('should sum numbers', () => {
      expect(utils.sum(4, 7)).toBe(11);
    });

    it('should sum negative numbers', () => {
      expect(utils.sum(-3, 19)).toBe(16);
    });

    it('should throw on undefined or null', () => {
      expect(() => utils.sum(null)).toThrow();
    });

    it('should sum zeros', () => {
      expect(utils.sum(0, 0)).toBe(0);
    });
  });
});