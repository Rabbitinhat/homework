function maskify(cc) {
  for(let i=0, len=cc.length-1; len -4 > 0; len--, i++){
    console.log(len);
    console.log(i);
    cc[i].replace(i, "#");
    }
    return cc;
}

console.log(maskify('4556364607935616'));