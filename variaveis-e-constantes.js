function exemplo() {
    var x = 1
    let y = 7
    var z = 100
    if (z) {
        var z = 3
        let y = 2
        const w = 4
        console.log(x)
        console.log(z)
        console.log(y)
        console.log(w)
        var x = 10
    } else {
        return false
    }
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(w)
}