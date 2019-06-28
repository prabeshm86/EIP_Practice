//fibonacci implementation using loop and recursion

function fib(n) {
    var first = 1;
    var second = 1;
    if (n == 1) return [1];
    if (n == 2) return [1, 1];
    arr = [1, 1];
    for (i = 2; i < n; i++) {
        arr[i] = first + second;
        first = second;
        second = arr[i];
    }

    return arr;

}
// Recursive function 
function fibs(n) {
    arr = [1, 1];
    if (n <= 2) {
        return arr.splice(0, n + 1);
    }
    arr = fibs(n-1);

    arr.push(arr[arr.length - 1] + arr[arr.length-2]);
    return arr;
}


//console.log(fib(5));

console.log(fibs(7));