
function largerNumber() {
    var smallOrLarge1 = prompt("Enter first number");
    var smallOrLarge2 = prompt("Enter second number here");
    var largernumber = "";
    if (smallOrLarge1 > smallOrLarge2) {
        largernumber = smallOrLarge1;
    }
    else if (smallOrLarge1 < smallOrLarge2) {
        largernumber = smallOrLarge2;
    }
    else if (smallOrLarge1 == smallOrLarge2) {
        largernumber = "The numbers are equal";
    }
    document.getElementById("assignment-buttons-1").innerHTML = largernumber;
}

function signOfProduct() {
    let productInput1 = parseInt(prompt("Enter the first number"));
    let productInput2 = parseInt(prompt("Enter the second number"));
    let productInput3 = parseInt(prompt("Enter the third number"));
    let productSign = "";
    if (productInput1 * productInput2 * productInput3 > 0) {
        productSign = "The sign is positive";
    }
    else if (productInput1 * productInput2 * productInput3 < 0) {
        productSign = "The sign is negative";
    }
    else if (productInput1 * productInput2 * productInput3 == 0) {
        productSign = "The sign is neither positive or negative";
    }
    else{
        productSign = "Invalid input"
    }
    document.getElementById("assignment-buttons-2").innerHTML = productSign;
}
function threeNumberSort() {
    let numSort1 = parseInt(prompt("Enter the number"));
    let numSort2 = parseInt(prompt("Enter number here"));
    let numSort3 = parseInt(prompt("Enter number here"));
    let numsorted = "";
    if (numSort1 > numSort2 && numSort2 > numSort3) {
        numsorted = numSort1.toString() + "," + numSort2.toString() + "," + numSort3.toString();
    }
    else if (numSort1 > numSort3 && numSort3 > numSort2) {
        numsorted = numSort1.toString() + "," + numSort3.toString() + "," + numSort2.toString();
    }
    else if (numSort2 > numSort1 && numSort1 > numSort3) {
        numsorted = numSort2.toString() + "," + numSort1.toString() + "," + numSort3.toString();
    }
    else if (numSort2 > numSort3 && numSort3 > numSort1) {
        numsorted = numSort2.toString() + "," + numSort3.toString() + "," + numSort1;
    }
    else if (numSort3 > numSort2 && numSort2 > numSort1) {
        numsorted = numSort3.toString() + "," + numSort2.toString() + "," + numSort1.toString();
    }
    else if (numSort3 > numSort1 && numSort1 > numSort2) {
        numsorted = numSort3.toString() + "," + numSort1.toString() + "," + numSort2.toString();
    }
    document.getElementById("assignment-buttons-3").innerHTML = numsorted;
}
function forSumThrees() {
    let totalsumThrees = 0; 
    for(let i = 0; i<1000; i = i + 3){
        totalsumThrees = totalsumThrees + i;
    }
    document.getElementById("assignment-buttons-4").innerHTML = totalsumThrees
}

function function5() {
    alert("Project 5 is in progress");
}
function function6() {
    alert("Project 6 is in progress");
}
function centuryFromYear() {
    let yearEntered = prompt("Enter a yearEntered, find out the century it was in");
    let centuryRecorded = 0;
    centryRecorded = Math.floor(yearEntered / 100 + 1);
    document.getElementById("assignment-buttons-7").innerHTML = centuryRecorded;
}

function thirdAngle() {
    let angleOne = parseInt(prompt("Enter the first number"));
    let angleTwo = parseInt(prompt("Enter the second number"));
    let angleThree = "";
    let totalofAngles = 180;
    if (totalofAngles < 181 && totalofAngles > 0 )
    totalofAngles - angleOne - angleTwo == angleThree
    else if (angleOne < 0 || angleTwo < 0) {
        angleThree = "Invalid input, angles must be positive"
    }
   
    document.getElementById("assignment-buttons-8").innerHTML = angleThree
}
function function9() {
    alert("Project 9 is in progress");
}