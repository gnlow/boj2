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

const bi = Bi.fromNodes([
    [1, 2],
    [1, 3],
    [2, 2],
    [3, 1],
])

const solve = <A, B>(bi: Bi<A, B>, length = 0): number[] => {
    const [head, ...tail] = bi.a2b
    console.log(length, bi)
    if (!head) return [length]
    if (!head[1].length) return [length]
    return head[1].flatMap(b =>
        solve(
            bi
                .delA(head[0])
                .delB(b),
            length + 1,
        )
    )
}

console.log(
    //bi,
    //bi.delA(1),
)
console.log(solve(bi))