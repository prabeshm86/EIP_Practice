//recursive function to find the sum of integers in an array

function sum_rec(arr)
{
    if (arr.length==0) return 0;

    return arr.shift() + sum_rec(arr);
}

console.log(sum_rec([1,2,3,4]));