function arrayManipulation(n, queries) {

    var arr = [];

    var max = 0;
    for (var j = 0; j < queries.length; j++) {
        var start = queries[j][0];
            var end = queries[j][1];

        for (var i = queries[j][0]; i <= queries[j][1]; i++) {
            if (!arr[i]) arr[i] = 0;

            

            if (start <= i <= end) {
                arr[i] += queries[j][2];
                if (max < arr[i]) max = arr[i];
            }
        }

    }

    return max;

}

console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));