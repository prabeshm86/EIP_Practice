function uniq_subs(str) {
    if (str.length == 0) [];
    var arr = [];
    for (i = 0; i < str.length; i++) {
        var char = str[i];

        if (!arr.includes(char))
            arr.push(char);


        var left = str.substring(i + 1, str.length - i);

        var leftSubs = uniq_subs(left);

        leftSubs.forEach(i => {
            if (!arr.includes(i))
                arr.push(i);
            if (!arr.includes(char + i))
                arr.push(char + i);
        })
    }
    return arr;
}

console.log(uniq_subs("abba"));