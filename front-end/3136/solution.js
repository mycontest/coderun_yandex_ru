
// Euler's Totient Function
//https://www.geeksforgeeks.org/eulers-totient-function/#:~:text=Euler's%20Totient%20function%20%CE%A6(n,Divisor)%20with%20n%20is%201.

function f(n) {
    let num = n;
    for (let p = 2; p * p <= n; ++p) {
        if (n % p == 0) {
            while (n % p == 0)
                n /= p;
            num *= (1.0 - (1.0 / p));
        }
    }
    if (n > 1) num -= num / n;
    return parseInt(num);
}

process.stdin.on('data', (n) => {
    process.stdout.write(f(parseInt(n.toString())).toString());
    process.exit();
});

