function minimumSwaps(arr) {
    var count= 0 ;
    var a = {};
    for (i =0; i< arr.length; i++){
        a[arr[i]] = i;
    }

    for ( i= 0; i< arr.length; i++){
        if (arr[i] == i+1) continue;

        else{
            var swapPos = a[i+1];
             
            var swap = arr[swapPos];    
            arr[swapPos] = arr[i];
            arr[i] = swap;

            a[i+1] = i;
            a[arr[swapPos]] = swapPos;
            count++;
        }
    }
    return count;

}

console.log(minimumSwaps([1 ,3 ,5 ,2, 4, 6 ,7]));