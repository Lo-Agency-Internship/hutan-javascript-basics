"use strict";

// // // ========================== Intrative =====================
// //   function factorialIterative(number) {

// //     let get_number = number;
// //     if(number === 0 || number === 1)
// //     {
// //         return 1;
// //     }
// //     else {
        
// //     while(number > 1)
// //     {
// //         number--;
// //         get_number *= number;
// //     }
// //     return get_number;
// //     }
    
// //   }

// //   console.log("I Defined 6 for number Parameter (Iterative)");
// //   console.log(factorialIterative(6)) ;

// // // ========================== Recursive =====================

// //   function factorialRecursive(number)
// // {
// //     if(number === 0 || number === 1)
// //     {
// //         return 1;
// //     }
// //     else{
// //        return number * factorialRecursive(number -1)
// //     }
 
// // }
// // console.log("I Defined 6 for number Parameter (Recursive)");
// // console.log(factorialRecursive(6));




// ========Random Numbers Between 15 and 50==========
function CreateRandomNumbers(count)
{
  const myarray=[];
  let min = 15;
  let max=50;
  for(let i = 0;i < count; i++)
  {
    myarray.push(Math.floor(Math.random()*(max-min)+min));
  }
  return myarray;
}

// ========MAP==========
function customMap(myarr=[],callBack)
{
  const _getValue=[];
  for(let val of myarr)
  {
    _getValue.push(callBack(val));
  }

  return _getValue;
}
const initialRandomNumbers=CreateRandomNumbers(7);
const _output= customMap(initialRandomNumbers,(val)=>{
  return val*2;
});

console.log(`===Intial Random Numbers = ${initialRandomNumbers} \n===*2\n===Changed with customMap Function = ${_output  }\n\n\n`);



// ========FILTER==========
function customFilter(myarr=[],callBack)
{
  const _getValue=[];
  for(let val of myarr)
  {
    if(callBack(val))
    {
      _getValue.push(val);
    }
  }
 
  return _getValue;
}

const even = customFilter(initialRandomNumbers,(val)=>{
  return val % 2 === 0;

});

console.log(`===Intial Random Numbers = ${initialRandomNumbers} \n===Get Even Numbers \n===Even Numbers = ${even} \n\n\n`);

// ========REDUCE==========

function customReduce(arr, callback)
{
    let initial = arr[0];

    for (let i = 1; i < arr.length; i++)
    {
        initial = callback(initial, arr[i], i);
    }
    return initial;
}

console.log(customReduce([20,6,4], (acc, cv) => acc + cv));


