const main = (input: string) => {
    const notebooks: Record<string, string[]> = {}
    input
        .split("\n")
        .slice(1)
        .forEach(line => {
            const [a, b] = line.split(" ")
            notebooks[b] ||= []
            notebooks[b].push(a)
        })
    
    const notebooksEntries = Object.entries(notebooks).sort((a, b) => a[1].length - b[1].length)
    
    return solve(notebooksEntries, [])
}

const solve = ([head, ...tail]: [string, string[]][], skipMans: string[]): number => {
    console.log([head, ...tail])
    if (!head) return 0
    return head[1].reduce(
        (prev, curr) => {
            if (skipMans.includes(curr)) return prev
            return prev + solve(tail, [...skipMans, curr])
        },
        0,
    )
}

console.log(
main(
`5 5
1 1
2 2
3 3
4 4
5 5`
)
)

console.log(
main(
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
)
)
console.log("---")
console.log(
main(
`
1 1
2 2`
)
)