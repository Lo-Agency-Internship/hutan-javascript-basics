"use strict";

// ========================== Intrative =====================
  function factorialIterative(number) {

    let get_number = number;
    if(number === 0 || number === 1)
    {
        return 1;
    }
    else {
        
    while(number > 1)
    {
        number--;
        get_number *= number;
    }
    return get_number;
    }
    
  }

  console.log("I Defined 6 for number Parameter (Iterative)");
  console.log(factorialIterative(6)) ;

// ========================== Recursive =====================

  function factorialRecursive(number)
{
    if(number === 0 || number === 1)
    {
        return 1;
    }
    else{
       return number * factorialRecursive(number -1)
    }
 
}
console.log("I Defined 6 for number Parameter (Recursive)");
console.log(factorialRecursive(6));
