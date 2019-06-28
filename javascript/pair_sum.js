function pair_sum(arr, k){
    pairs = [];
    for(i= 0; i< arr.length; i++){
        for (j=i+1; j< arr.length; j++){
            if (arr[i]+arr[j] == k)
            {
                if (arr[i] > arr[j]) pairs.push([arr[j], arr[i]]);
                else pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}


function pair_sum_1(arr, k) {
    var seen = new Set();
    var pairs = new Set();
  
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      var target = k - num;
      if (seen.has(target)) {
        pairs.add([Math.min(num, target), Math.max(num, target)]);
      }
  
      seen.add(num);
    }
  
    return pairs;
  }

console.log(pair_sum_1([1,2,1,3,4,-1], 0));