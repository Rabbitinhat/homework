function dicToBin(num, n){
    let s = "";
    for(let i=Math.floor(num%n); num/n > 0; num = Math.floor(num/n), i=Math.floor(num%n)){
        s = i + s;
    }
    return s;
}

/* for(let i=1; i<101; i++){
    console.log(`${i}, ${dicToBin(i, 2)}`);
    
} */

function b(num, n){
    let s = "";
    num *= 2;
    for(let i=0; i<n; num *= 2, i++){
        if(num > 1){
            s += 1;
            num -= 1;
        }else{
            s += 0;
        }

    }
    s = 0 + "." + s;
    return s;
}

console.log(b(0.14, 10));

2.toString(2)

3.14.toString(2)