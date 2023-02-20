function factorial(r) {
    let fat = 1
    for (let c = r; c > 1; c--) {
        fat *= c
    }
    return fat   
}  

console.log(factorial(5))