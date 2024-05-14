class Table {
    data
    constructor(data: string[][]) {
        this.data = data
    }
    get(x: number, y: number) {
        return this.data[y][x]
    }
    get start() {
        return new Pointer(this, 0, 0)
    }

    static fromString(str: string) {
        return new Table(
            str .split("\n")
                .map(x => x.split(""))
        )
    }
}

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
    get right() {
        return new Pointer(
            this.table,
            this.x + 1,
            this.y,
        )
    }
    get down() {
        return new Pointer(
            this.table,
            this.x,
            this.y + 1,
        )
    }
}

const target = "MOLA"

const scan =
({ right, down, value }: Pointer) =>
(cnt: number): Pointer[] => {
    if (cnt == 0 && value != target[0]) {
        return []
    }
    return [right, down]
        .map(x => {
            console.log(x.value)
            return x
        })
        .filter(x => x.value == target[cnt + 1])
        .flatMap(x => 
            cnt == target.length
                ? x
                : scan(x)(cnt + 1)
        )
} 

const str =
`MOLA
AMOL
FATI
MOLA`

console.log(
    scan(Table.fromString(str).start)(0)
    .map(({x, y}) => ({x, y}))
)