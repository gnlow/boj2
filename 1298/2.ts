const structuredClone = <A, B>(x: Bi<A, B>) => {
    return {
        a2b: new Map(Array.from(x.a2b).map(([a, bs]) => [a, [...bs]])),
        b2a: new Map(Array.from(x.b2a).map(([a, bs]) => [a, [...bs]])),
    }
}

interface BiInterface<A, B> {
    a2b: Map<A, B[]>
    b2a: Map<B, A[]>
}

class Bi<A, B> {
    a2b
    b2a

    constructor({ a2b, b2a }: BiInterface<A, B> = {
        a2b: new Map,
        b2a: new Map,
    }) {
        this.a2b = a2b
        this.b2a = b2a
    }

    addNode([a, b]: [A, B]) {
        (this.a2b.get(a) || this.a2b.set(a, []).get(a))
            ?.push(b)
        ;
        (this.b2a.get(b) || this.b2a.set(b, []).get(b))
            ?.push(a)
    }
    clone() {
        return new Bi(structuredClone(this)) as Bi<A, B>
    }
    delA(a: A) {
        const result = this.clone()
        result.a2b.get(a)
            ?.forEach(b =>
                result.b2a.get(b)
                    ?.splice(result.b2a.get(b)!.indexOf(a), 1)
            )
        result.a2b.delete(a)
        return result
    }
    delB(b: B) {
        const result = this.clone()
        result.b2a.get(b)
            ?.forEach(a =>
                result.a2b.get(a)
                    ?.splice(result.a2b.get(a)!.indexOf(b), 1)
            )
        result.b2a.delete(b)
        return result
    }

    static fromNodes<A, B>(nodes: [A, B][]) {
        const bi = new Bi<A, B>
        nodes.forEach(node => bi.addNode(node))

        return bi
    }
}

const solve = <A, B>(bi: Bi<A, B>, length = 0): number[] => {
    const [head, ..._tail] = bi.a2b
    // console.log(length, bi)
    if (!head) return [length]
    if (!head[1].length) return solve(
        bi.delA(head[0]),
        length,
    )
    return head[1].flatMap(b =>
        solve(
            bi
                .delA(head[0])
                .delB(b),
            length + 1,
        )
    )
}

const main = (input: string) =>
    solve(Bi.fromNodes(
        input
            .split("\n")
            .slice(1)
            .map(x => x.split(" ").map(Number) as [number, number]))
    )
    .reduce((prev, curr) => prev > curr ? prev : curr)

const input = 
// require("fs").readFileSync(0).toString();
`5 13
1 2
1 3
2 2
2 3
3 1
3 2
4 1
4 2
5 1
5 2
5 3
5 4
5 5`

console.log(main(input))