type Coord = [number, number]

const crash =
([x1, y1]: Coord, [x2, y2]: Coord) =>
    false
    || x1 == x2
    || y1 == y2
    || x1 - y1 == x2 - y2
    || x1 + y1 == x2 + y2

const possible =
(n: number) =>
(queens: Coord[]): Coord[][] =>
    Array(n*n).fill(undefined).flatMap((_, i) => {
        //console.log(n, queens)
        if (queens.length == n) return [queens]
        const x = i % n
        const y = Math.floor(i / n)
        if (!queens.some(queen => crash(queen, [x, y]))) {
            return possible(n)([...queens, [x, y]])
        }
        return []
    })
console.log(new Set(possible(4)([]).map(x => x.sort().map(String).join(","))))

console.log(new Set(possible(6)([]).map(x => x.sort().map(String).join(","))).size)