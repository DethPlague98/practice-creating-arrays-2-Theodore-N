//Task 1 Initialize
let arr1 = Array(7).fill("Hello");
console.log(arr1);

//Task 2 Update the Array
arr1.fill("17",1,5);
console.log(arr1);

//Task 3 Populate with a for loop
let arr2 = Array(5);

for (i = 0; i < arr2.length; i++){
    arr2[i] = (i *10);
    console.log(arr2[i]);
} 