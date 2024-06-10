for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 100);
    })(i);

}
