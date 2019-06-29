//permutation using recursion

function permutations(arr) {
    if (arr.length == 0) {
      return [[]];
    }
  
    var perms = [];
  
    for (var i = 0; i < arr.length; i++) {
      var el = arr[i];
      var rest = arr.slice(0, i).concat( arr.slice(i+1, arr.length));
      var new_perms = permutations(rest).map(function(perm) {
        perm.unshift(el);
        return perm;
      });
      perms = perms.concat(new_perms);
    }
  
    return perms;
  }

  console.log(permutations([1,2,3]));