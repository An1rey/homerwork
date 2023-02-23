function pow(num,degree) {
    if (degree !== 1) {
        return num *= pow(num,degree - 1);
    } else {
        return num;
    }
}
alert( pow(2,3));