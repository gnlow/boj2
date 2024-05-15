class Table {
    data
    constructor(data: string[][]) {
        this.data = data
    }
    get start() {
        return new Pointer(this, 0, 0)
    }
    get end() {
        return new Pointer(
            this,
            this.data[0].length - 1,
            this.data.length - 1,
        )
    }
    static parse(str: string) {
        return new Table(
            str .trim()
                .split("\n")
                .map(x => x.split(""))
        )
    }
    get(x: number, y: number) {
        return this.data[y]?.[x]
    }
}

const str = "MOLA"

class Pointer {
    table
    x
    y
    constructor(
        table: Table,
        x: number,
        y: number,
    ) {
        this.table = table
        this.x = x
        this.y = y
    }
    get value() {
        return this.table.get(this.x, this.y)
    }
    move(x: number, y: number) {
        return new Pointer(
            this.table,
            this.x + x,
            this.y + y
        )
    }
    get left() { return this.move(-1, 0) }
    get right() { return this.move(1, 0) }
    get up() { return this.move(0, -1) }
    get down() { return this.move(0, 1) }

    get code(): number {
        return str.indexOf(this.value)
    }
    get state(): number {
        if (!this.value) return -1
        const v = [this.left, this.up]
            .filter(x => x.code + 1 == this.code)
            .map(x => x.state + 1)
        return Math.max(...v)
    }
    get count(): number {
        console.log(this.x, this.y)
        if (!this.value) return 0
        const v = [this.left, this.up]
            .map(x =>
                x.count + (
                    (x.state + 1 == str.length)
                        ? 1
                        : 0
                )
            )
        return Math.max(...v)
    }
}

const table = Table.parse(`
SUNRIN
AMUMAL
STRING
MOLAAA
KKKMOO
OOOOLA
`)

console.log(table.end.count)