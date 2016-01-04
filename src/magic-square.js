export default class MagicSquare {
    constructor() {
        this.magic = [];
    }

    generate(numberOfRowsColumns) {
        let n = numberOfRowsColumns;

        if (n % 2 === 0) {
            new Error("numberOfRowsColumns must be odd");
        }

        for (let i = 0; i < n; i++) {
            this.magic[i] = [];

            for (let j = 0; j < n; j++) {
                this.magic[i][j] = 0;
            }
        }

        let row = n - 1;
        let col = Math.floor(n / 2);

        this.magic[row][col] = 1;

        for (let i = 2; i <= n * n; i++) {
            if (this.magic[(row + 1) % n][(col + 1) % n] == 0) {
                row = (row + 1) % n;
                col = (col + 1) % n;

            } else {
                row = (row - 1 + n) % n;
            }

            this.magic[row][col] = i;
        }

        return this.magic;
    }

    renderInConsole() {
        console.table(this.magic);
    }
}