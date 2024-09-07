let string1=prompt("Enter the string:");
array1=string1.split("");
let reversedArray=[];
for (const i of array1) {
    reversedArray.unshift(i);
};
console.log(reversedArray.join(""));