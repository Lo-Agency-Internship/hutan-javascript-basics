"use strict";

function logicalGateBuffer (result=false)
{
    let input = Math.floor(Math.random()*2);
    console.log("Buffer " +" =  " + input);
    switch (input){
        case 1:
            result = !!true;
            console.log("Buffer is "+result);
            return !!result;
            break;
            case 0:
                result=!!false;
                console.log("Buffer is "+ result);
                return !result;
            
                break;
    }
    
}


function logicalGateNot (result=false)
{
    let input = Math.floor(Math.random()*2);
    console.log("NOT " + " = " +input);
    switch (input){
        case 1:
            result = !true;
            console.log("NOT is " +result);
            return !result;
            break;
            case 0:
                result=!false;
                console.log("NOT is " +result);
                return !!result;
                break;
    }
    
}

function logicalGateAnd(a=false,b=false)
{
    let _a = Math.floor(Math.random()*2);
    let _b=Math.floor(Math.random()*2);

    console.log("AND " + " = " +"a is "+ _a+ " , "+"b is " + _b);
    if(_a ===0 &&_b===0)
    {
        a=!!false;
        console.log("AND is " + a );
        return !a ;
    }

    if(_a ===0 &&_b===1)
    {
        a=!!false;
        console.log("AND is " + a );
        return !a;
    }

    if(_a ===1 &&_b===0)
    {
        a=!!false;
        console.log("AND is " + a );
        return !a;
    }

    if(_a ===1 &&_b===1)
    {
        a=!false;
        b=!false
        console.log("AND is " + a );
        return !a;
    }

}


function logicalGateOr(a=false,b=false)
{
    let _a = Math.floor(Math.random()*2);
    let _b=Math.floor(Math.random()*2);

    console.log("OR " + " = " +"a is "+ _a+ " , "+"b is " + _b);

    if(_a ===0 &&_b===0)
    {
        a=!!false;
        console.log("OR is " + a );
        return !a + !b;
    }

    if(_a ===0 &&_b===1)
    {
        a=!false;
        b=!false
        console.log("OR is " + a );
        return !a + !b;
    }

    if(_a ===1 &&_b===0)
    {
        a=!false;
        b=!false
        console.log("OR is " + a );
        return !a + !b;
    }

    if(_a ===1 &&_b===1)
    {
        a=!false;
        b=!false
        console.log("OR is " + a );
        return !a + !b;
    }

  
}

function logicalGateNand(a=false,b=false)
{
    let _a = Math.floor(Math.random()*2);
    let _b=Math.floor(Math.random()*2);

    console.log("NAND " + " = " +"a is "+ _a+ " , "+"b is " + _b);
    if(_a ===0 &&_b===0)
    {
        a=!false;
        b=!false;
        console.log("OR is " + a );
        return !a + !b;
    }

    if(_a ===0 &&_b===1)
    {
        a=!false;
        b=!false
        console.log("OR is " + a );
        return !a + !b;
    }

    if(_a ===1 &&_b===0)
    {
        a=!false;
        b=!false
        console.log("OR is " + a );
        return !a + !b;
    }

    if(_a ===1 &&_b===1)
    {
        a=!!false;
        console.log("NAND is " + a );
        return !a + !b;
    }
}


function logicalGateNor(a=false,b=false)
{
    let _a = Math.floor(Math.random()*2);
    let _b=Math.floor(Math.random()*2);

    console.log("NOR " + " = " +"a is "+ _a+ " , "+"b is " + _b);
    if(_a ===0 && _b===0)
    { 
        a=!!true;
        b=!!true;
        console.log("NOR is " + a );
        return !a;
    }
    else
    {
        console.log("NOR is " + a );
        return false;
    }
}

function logicalGateXor(a=false,b=false)
{
    let _a = Math.floor(Math.random()*2);
    let _b=Math.floor(Math.random()*2);
    console.log("XOR " + " = " +"a is "+ _a+ " , "+"b is " + _b);
  if(_a === 0 && _b===0 || _a ===1 && _b===1)
  {
    console.log("XOR is " + a );
   a=!!true;
   return !a;
  }
  else if(_a === 0 && _b===1 || _a ===1 && _b===0)
  {
      a=!false;
    console.log("XOR is " + a );
    return !a;
  }

}

function logicalGateXnor(a=false,b=false)
{
    let _a = Math.floor(Math.random()*2);
    let _b=Math.floor(Math.random()*2);
    console.log("XNOR " + " = " +"a is "+ _a+ " , "+"b is " + _b);
  if(_a === 0 && _b===1 || _a ===1 && _b===0)
  {
    console.log("XNOR is " + a );
   a=!!true;
   return !a;
  }
  else if(_a === 0 && _b===0 || _a ===1 && _b===1)
  {
      a=!false;
    console.log("XNOR is " + a );
    return !a;
  }

}


logicalGateBuffer();
console.log("\n");
logicalGateNot();
console.log("\n");
logicalGateAnd();
console.log("\n");
logicalGateOr();
console.log("\n");
logicalGateNand();
console.log("\n");
logicalGateNor();
console.log("\n");
logicalGateXor();
console.log("\n");
logicalGateXnor();