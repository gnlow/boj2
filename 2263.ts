const cut =
(i: number) =>
<A>(as: A[]) => [
    as.slice(0, i),
    as.slice(i + 1),
]

type BiTree<Leaf> = [BiTree<Leaf> | Leaf, Leaf, BiTree<Leaf> | Leaf] | Leaf

const solve =
(inOrder: number[], postOrder: number[]): BiTree<number> => {
    if (inOrder.length == 1) return inOrder[0]
    const top = postOrder[postOrder.length - 1]
    const [left, right] = cut(inOrder.indexOf(top))(inOrder)
    return [
        solve(left, postOrder.filter(x => left.includes(x))),
        top,
        solve(right, postOrder.filter(x => right.includes(x))),
    ]
}

const preTrav = (tree: BiTree<number>): number[] => {
    if (!Array.isArray(tree)) return [tree]
    const [left, root, right] = tree
    return [root, ...preTrav(left), ...preTrav(right)]
}

const main = (input: string) => {
    const [inOrder, postOrder] = input.split("\n").slice(1).map(x => x.split(" ").map(Number))
    return preTrav(solve(inOrder, postOrder)).join(" ")
}

/*
const result = solve(
    [1, 3, 4, 5, 6, 7, 12, 15, 16],
    [1, 4, 6, 5, 3, 12, 16, 15, 7],
)
console.log(preTrav(result))
*/

console.log(main(require("fs").readFileSync(0).toString()))