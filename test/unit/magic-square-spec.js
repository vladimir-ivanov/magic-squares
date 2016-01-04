import MagicSquare from '../../src/magic-square';

describe('MagicSquare', function () {
    beforeEach(() => {
        var self = this;

        this.component = new MagicSquare();
    });

    it('should have all rows and columns have the same sum', () => {
        let initialFixture = 3;
        let random = Math.floor((Math.random() * 10000) + initialFixture);

        if (random % 2 === 0) {
            random = random + 1;
        }

        let inductionFixture = [initialFixture, random, random + 2];

        inductionFixture.forEach(n => {
            let magicSquare = this.component.generate(n);
            let results = [];

            for (let i = 0; i < n; i++) {
                results.push(magicSquare[i].reduce((a, b) => a + b));
            }

            expect(results.reduce((a, b) => a === b ? a : false)).toEqual(results[0]);
        });
    });
});