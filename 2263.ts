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

console.log(solve(
    [1, 3, 4, 5, 6, 7, 12, 15, 16],
    [1, 4, 6, 5, 3, 12, 16, 15, 7],
))
