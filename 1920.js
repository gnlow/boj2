const input =
//require("fs").readFileSync(0).toString();
`5
4 1 5 2 3 7 10
5
1 3 7 9 5`

const [_n, as, _m, bs] = input.split("\n").map(x => x.split(" "))

as.sort((a, b) => a - b)

const include =
    (start, end) => 
    target => {
        const length = end - start
        const center = Math.floor((start+end)/2)
        console.log(start, center, end)
        console.log(as.slice(start, end), target, as[center])
        console.log(target, (target < as[center] ? "<" : ">="), as[center])

        return Number(
            length == 1
                ? as[start] == target
                : target < as[center]
                    ? include(start, center)(target)
                    : include(center, end)(target)
        )
    }

console.log(bs.map(b => include(0, as.length)(b)).join("\n"))

//console.log(as, bs)