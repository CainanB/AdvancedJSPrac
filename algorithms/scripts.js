// Multiple Pointers

// Naive way

const numArray = [-4,-3, -2, -1, 0, 1, 2, 5]

// const sumZero = numArr => {
//     for(let i = 0; i < numArr.length; i++){
        
//         for(let j = i + 1; j < numArr.length; j++){
            
//             if(numArr[i] + numArr[j] === 0){
//                 return [numArr[i],numArr[j]]
//             }
//         }
//     }
// }
// console.log(sumZero(numArray))


// My way
// const sumZero = numArr => {
//     let i = 0 
//     let j = numArr.length - 1
//     while(i < j){
//         if(numArr[i] + numArr[j] > 0){
//             j--
//         }else if(numArr[i] + numArr[j] < 0){
//             i++
//         }else if(numArr[i] + numArr[j] === 0){
//             return [numArr[i], numArr[j]]
//         }
       
//     }
// }

// console.log(sumZero(numArray))

// UDEMY COURSE WAY

// function sumZero(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right]
//         if(sum === 0){
//             return [arr[left], arr[right]]
//         }else if(sum > 0){
//             right--;
//         }else {
//             left++
//         }
//     }
// }

// console.log(sumZero(numArray))

// Practice
// countUniqueValues

const countUniqueValues = arr => {
    let i = 0
   for(let j = 1; j < arr.length; j++){
       if(arr[i] !== arr[j]){
           i++;
           arr[i] = arr[j]
       }
   }
   return arr.splice(0,arr[i])
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

