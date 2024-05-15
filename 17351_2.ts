const cache =
<K extends unknown[]>
(keyStringifier: (...key: K) => string = (...args) => String(args)) =>
(
    f: (...args: unknown[]) => unknown,
    _context:
        | ClassGetterDecoratorContext
        | ClassMethodDecoratorContext
) => {
    const map = new Map()
    return function(this: { id: string }, ...args: K) {
        const key = this.id + ";" + keyStringifier(...args)
        if (map.has(key)) return map.get(key)

        const result = f.call(this, ...args)
        map.set(key, result)
        return result
    }
}

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
    map(f: (pointer: Pointer) => string) {
        return new Table(this.data.map((row, y) =>
            row.map((_, x) => f(this.getPointer(x, y)))
        ))
    }
    static parse(str: string) {
        return new Table(
            str .trim()
                .split("\n")
                .map(x => x.trim().split(""))
        )
    }
    toString() {
        return this.data
            .map(row => row.map(x => x.padStart(3, " ")).join(""))
            .join("\n")
    }
    getPointer(x: number, y: number) {
        return new Pointer(this, x, y)
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
    get id() { return this.x + "," + this.y }
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
    @cache()
    get state(): number {
        if (!this.value) return -1
        const v = [this.left, this.up]
            .filter(x => x.code + 1 == this.code)
            .map(x => x.state + 1)
        return Math.max(
            ...v,
            this.code == 0
                ? 0
                : -1,
            )
    }
    @cache()
    get count(): number {
        // console.log(this.x, this.y)
        if (!this.value) return 0
        const v = [this.left, this.up]
            .map(x =>
                x.count + (
                    (this.state + 1 == str.length)
                    && (x.state + 2 == str.length)
                        ? 1
                        : 0
                )
            )
        return Math.max(...v)
    }
}

/*
const table = Table.parse(`
ZZMZ
ZMMO
ZZZL
ZZZA
`)
console.log(table.map(p => p.state+"").toString(),"\n")
console.log(table.map(p => p.count+"").toString())

console.log(table.end.count)
*/

/*
const table = Table.parse(
    (require("fs").readFileSync(0)+"").substring(1)
)
console.log(table.end.count)
*/