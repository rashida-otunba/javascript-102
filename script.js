// // // const aString="i am a string";
// // // let anotherString= `most programs start with ${aString}`;
// // // console.log(anotherString);

// // //Arrays are lists of things 

// // let anArray=[1,"two", [3,3], "any valid data type", null]; 

// // console.log(anArray[2]);
// // let nums = [5,5,5,5,5,5];
// // let sum =1;

// // //FOR LOOP 1. declare a variable, declare a condition to check and declare an increment 

// // for (let i=0; i < anArray.length; i++){
// //     // console.log("I is", i );
// //     console.log(anArray[i]);

// //     sum *= nums[i];
    
// // }

// // console.log(sum);

// let counter =10; 
// //while true, run the code 

// let counterString="the counter is doing this "

// while (counter > 0){//while this condition is true, then run the code 
//     console.log(counterString, counter);
//     counter--;
// }

//Array Methods 

//methods are just functions inside of object 
//.someMethod (someArgument)

// let newArray=[];
// newArray.push("Rashida"); // add item to an array 
// newArray.unshift("Emily"); // add item to an array 

// // console.log(newArray.indexOf("Emily")); //allows you to find location that allows you to find index number 
// console.log(newArray[(0)]);

let nums2=[];

for (let k=0; k<10; k++){
    nums2.push(k);
}
console.log(nums2); 

let slicedArray=nums2.slice(3, 6); // creates a new array using the value at the index [3]; the index [6] does not appear; it represents the value it stops at 
nums2.splice(2,1);
console.log(slicedArray);
console.log(nums2);