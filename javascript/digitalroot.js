function digital_root(num) {
    var str = num.toString();
    while (str.length != 1) {
        var total=0;
        for (i = 0; i< str.length; i++){
           n = parseInt(str.charAt(i));
            total += n;
        }
        str = total.toString();
    }
    return str;
}

console.log(digital_root(455));