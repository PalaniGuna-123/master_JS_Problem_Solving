function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 1; i <= n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

// Example
fibonacci(10);
/* Output:
0
1
1
2
3
5
8
13
21
34
*/
