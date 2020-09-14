var first = parseInt (prompt("choose the 1st number"));

var operation = prompt ("choose the operator (\" + , - , * , / \")");

var second = parseInt (prompt("choose the second number"));
 
if (operation == "+"){
    alert ("Addition of" +first+ "+" +second+ "is"  +(first+second))
}
else if (operation == "-"){
    alert ("Subtraction of" +first+ "-" +second+ "is"  +(first-second))
}
else if (operation == "*"){
    alert ("Multiplication of" +first+ "×" +second+ "is"    +(first*second))
}
else if (operation == "/"){
    alert ("Division of" +first+ "÷" +second+ "is"   +(first/second))
}