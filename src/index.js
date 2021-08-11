module.exports = function reverse(n) {
    n = Math.abs(n);
    let reversedNumber = 0;
    while (n > 0) {
        reversedNumber = reversedNumber * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reversedNumber;
}
