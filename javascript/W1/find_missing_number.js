function find_missing_number(arr1, arr2){
    var arr2Count = {};
    for (i=0; i<arr2.length; i++){
        if (!arr2Count.hasOwnProperty(arr2[i])) arr2Count[arr2[i]] = 1;
        else arr2Count[arr2[i]] = parseInt( arr2Count[arr2[i]])+1;
    }
//console.log(arr2Count);
    for (i=0; i< arr1.length; i++){
        if (!arr2Count.hasOwnProperty(arr1[i])) return arr1[i];
        else {
            arr2Count[arr1[i]] = parseInt(arr2Count[arr1[i]]) -1;
        }
        
    }

    // for duplicates
    var missing = 0;
    Object.keys(arr2Count).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object 
        if (parseInt(arr2Count[key]) < 0) missing =  key; 
    });
    
    return missing;
    //console.log(arr2Count);


}

console.log(find_missing_number([8,3,5,6,1], [1,5,3]));

console.log(find_missing_number([1,1,1,1], [1,1,1]));