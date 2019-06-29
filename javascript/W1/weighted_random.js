function weighted_random_index(arr){
    var sum = 0;

    arr.forEach(element => {
       sum+= element; 
    });

    var random = Math.floor(Math.random()* sum);

    var cum = 0;
    //console.log(random);
    for(i=0; i< arr.length; i ++){
        cum += arr[i];
        if (random < cum) return i;
    }
    
}

console.log(weighted_random_index([4,6,8]));