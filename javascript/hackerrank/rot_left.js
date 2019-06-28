//Hacker rank problem for rotating an array to the left

function rotLeft(a, d) {
    r = [];
    for (i = 0; i< a.length; i++){
        var shift = i+d < a.length ? i+d : (i+d) % a.length;
        //console.log(shift);
        r[i] = a[shift];
    }

    return r;
}

console.log(rotLeft([1,2,3,4], 7));