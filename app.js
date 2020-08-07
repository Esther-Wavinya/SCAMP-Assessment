// Using a for loop

var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    
    return f;
};


// Using a while loop

function fibonacci(num){
    var a = 1, b = 0, temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
    }

    return b;
}
