function dicToBin(num, n){
    let s = "";
    for(let i=Math.floor(num%n); num/n > 0; num = Math.floor(num/n), i=Math.floor(num%n)){
        s = i + s;
    }
    return s;
}

for(let i=1; i<101; i++){
    console.log(`${i}, ${dicToBin(i, 2)}`);
    
}