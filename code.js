function sum(a) {
    var sum = 0;
    if (a.length == 0) return 0;
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
