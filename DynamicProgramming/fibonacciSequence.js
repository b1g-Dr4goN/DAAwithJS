// Get the n-th Fibonacci number with DP [Overall Time Complexity: O(n)]

function fib(n) {
    if (n < 0) {
        return 0;
    }
    var F = [];
    F[0] = 0; F[1] = 1;
    for (var i = 2; i <= n; i++) {
        F[i] = F[i - 1] + F[i - 2];
    }
    return F[n];
}

var dp1 = () => {
    var n = prompt('Input the number n:');

    alert(`F[${n}] = ${fib(n)}`);
}