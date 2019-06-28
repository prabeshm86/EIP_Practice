//bubble sort example
//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function minimumBribe(arr){
    var bribe = {};
    var totalBribe = 0;
    for (i= 0; i< arr.length; i++){
        for(j= i+1; j< arr.length; j++){
            if (arr[i] > arr[j]){
                
                totalBribe++;
                if(!bribe.hasOwnProperty(arr[i])) 
                    bribe[arr[i]] = 1;
                else 
                    bribe[arr[i]] = parseInt(bribe[arr[i]])+1;

                if (bribe[arr[i]] >2) return "Too chaotic";
            } 
        }
    }
    //console.log(bribe);
    return totalBribe;
}

console.log(minimumBribe([2,1,5,3,4]));


// void minimumBribes(vector<int> q) {
//     int totalBribes = 0;
    
//     int expectedFirst = 1;
//     int expectedSecond = 2;
//     int expectedThird = 3;
    
//     for (unsigned int i = 0; i < q.size(); ++i) {
//         if (q[i] == expectedFirst) {
//             expectedFirst = expectedSecond;
//             expectedSecond = expectedThird;
//             ++expectedThird;
//         } else if (q[i] == expectedSecond) {
//             ++totalBribes;
//             expectedSecond = expectedThird;
//             ++expectedThird;
//         } else if (q[i] == expectedThird) {
//             totalBribes += 2;
//             ++expectedThird;
//         } else {
//             cout << "Too chaotic" << endl;
//             return;
//         }
//     }
    
//     cout << totalBribes << endl;
// }