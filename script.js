"use strict";


// Answer to Question 1
function ComparingEqual(number1,number2)
{
    let result;
    if(number1 === number2)
    {
        result =number1+number2;
        result = result*3;
        console.log(result);
    }
    else{
        console.log("Not Equal");
    }
}

ComparingEqual(3,3);

//  Answer to Question 2
function CompairingAbsoluteNumber(number)
{
    let _result;
    if(number > 19)
    {
        _result= number-19;
        _result=_result*3;
        console.log(_result);
    }
    else{
        console.log("Less than 19");
    }
}
CompairingAbsoluteNumber(112);



//  Answer to Question 3
function StartWithSpeceficLetters(input)
{
    let startWithLetter="Lo"
    if(input.startsWith(startWithLetter))
    {
        console.log(input);
    }
    else{
        input=startWithLetter+input;
        console.log(input);
    }
}

StartWithSpeceficLetters("asdAgency");