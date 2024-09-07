let a = +prompt("Give a number:");
let array1=[];
for (let i=2;i<a+1;i++) {
    let count = 0;
    for (let j=1;j<i+1;j++) {
        if (i%j===0) count++;
    }
    if (count === 2) array1.push(i);
};
console.log(array1.join(" "));