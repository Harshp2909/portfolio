
function largerNumber(){
    var smallOrLarge1 = prompt("Enter first number");
    var smallOrLarge2 = prompt("Enter second number here");
    var largernumber = "";
    if (smallOrLarge1 > smallOrLarge2){
        largernumber= smallOrLarge1;
    }
    else if (smallOrLarge1 < smallOrLarge2){
        largernumber = smallOrLarge2;
    }
    else if (smallOrLarge1 == smallOrLarge2){
        largernumber= "The numbers are equal";
    }
    document.getElementById("assignment-buttons-1").innerHTML = largernumber;
}

function signOfProduct(){
    var productInput1 = prompt("Enter first number");
    var productInput2 = prompt("Enter second number");
    var productInput3 = prompt("Enter third number");
    var productSign = "";
    if (productInput1*productInput2*productInput3 > 0){
        productSign = "The sign is positive";
    }
    else if (productInput1*productInput2*productInput3 < 0){
        productSign = "The sign is negative";
    }
    else if (productInput1 * productInput2 * productInput3 == 0){
        productSign = "The sign is neither positive or negative";
    }
    document.getElementById("assignment-buttons-2").innerHTML = productSign;
}
//Get checked by teacher tomorrow//
function threeNumberSort(){
    let numSort1 = parseInt(prompt("Enter the number"));
    let numSort2 = parseInt(prompt("Enter number here"));
    let numSort3 = parseInt(prompt("Enter number here"));
    let numsorted = "";
    if (numSort1 > numSort2 > numSort3){
        numsorted = numSort1 + numSort2 + numSort3;
    }
    else if (numSort1 > numSort3 > numSort2){
        numsorted = numSort1 + "," + numSort3 + "," + numSort2;
    }
    else if(numSort2 > numSort1 > numSort3){
        numsorted = numSort2 + "," + numSort1 + "," + numSort3;
    }
    else if(numSort2, numSort3, numSort1){
        numsorted = numSort2 + "," + numSort3 + "," + numSort1;
    }
    else if(numSort3 > numSort2 > numSort1){
        numsorted = numSort3 + "," + numSort2 + "," + numSort1;
    }
   else if(numSort3 > numSort1 > numSort2){
    numsorted = toString(numSort3)+","+toString(numSort1)+","+toString(numSort2)
   }
   document.getElementById("assignment-button-3").innerHTML = numsorted;
}
function function4(){
    alert("")
}
function function5(){
    alert("Project 5 is in progress");
}
function function6(){
    alert("Project 6 is in progress");
}
function centuryFromYear(){
    let yearEntered= prompt ("Enter a yearEntered, find out the century it was in");
    let century = 0;
    century = Math.floor(yearEntered/100+1);
    document.getElementById("assignment-button-7").innerHTML = century;
}

function function8(){
    alert("Project 8 is in progress");
}
function function9(){
    alert("Project 9 is in progress");
}

    
