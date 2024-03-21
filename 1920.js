const input =
require("fs").readFileSync(0).toString();
`5
4 1 5 2 3
5
1 3 7 9 5`

const [_n, as, _m, bs] = input.split("\n").map(x => x.split(" "))

as.sort((a, b) => a - b)

const include =
    ns =>
    target => Number(
        ns.length == 1
            ? ns[0] == target
            : target < ns[Math.floor(ns.length/2)]
                ? include(ns.slice(0, ns.length/2))(target)
                : include(ns.slice(ns.length/2))(target)
    )

console.log(bs.map(b => include(as)(b)).join("\n"))

//console.log(as, bs)