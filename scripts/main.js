
//first function to determine which number is larger with two numbers inputted
function largerNumber() {
    //setting variables for numbers imputted and the final output
    let smallOrLarge1 = parseInt(prompt("Enter first number"));
    let smallOrLarge2 = parseInt(prompt("Enter second number here"));
    let largernumber = "";
    //If the first number is larger output will be smallorLarge1
    if (smallOrLarge1 > smallOrLarge2) {
        largernumber = smallOrLarge1;
    }
    //If the second number is larger, the output will be smallorLarge2
    else if (smallOrLarge1 < smallOrLarge2) {
        largernumber = smallOrLarge2;
    }
    //If the imput is two eqaul numbers
    else if (smallOrLarge1 == smallOrLarge2) {
        largernumber = "The numbers are equal";
    }
    //If the input provided is not a number
    else {
        largernumber = "Invalid input";
    }
    document.getElementById("assignment-buttons-1").innerHTML = largernumber;
}
//determines whether the sign of the product of multiplying 3 numbers will be positive or negative
function signOfProduct() {
    //declaring variables for prompts and output
    let productInput1 = parseInt(prompt("Enter the first number"));
    let productInput2 = parseInt(prompt("Enter the second number"));
    let productInput3 = parseInt(prompt("Enter the third number"));
    let productSign = "";
    //If the sign is sign is positive
    if (productInput1 * productInput2 * productInput3 > 0) {
        productSign = "The sign is positive";
    }
    //if the sign is negative
    else if (productInput1 * productInput2 * productInput3 < 0) {
        productSign = "The sign is negative";
    }
    //if the sign is nor positive or negative; 0
    else if (productInput1 * productInput2 * productInput3 == 0) {
        productSign = "The sign is neither positive or negative";
    }
    //if numbers are not inputted
    else {
        productSign = "Invalid input";
    }
    document.getElementById("assignment-buttons-2").innerHTML = productSign;
}
//Sorts 3 inputted numbers numbers from greatest to leaast
function threeNumberSort() {
    //declaring variables for input prompts and output
    let numSort1 = parseInt(prompt("Enter the number"));
    let numSort2 = parseInt(prompt("Enter number here"));
    let numSort3 = parseInt(prompt("Enter number here"));
    let numsorted = "";
    //If the first is largest followed by second and then third
    if (numSort1 > numSort2 && numSort2 > numSort3) {
        numsorted = numSort1.toString() + "," + numSort2.toString() + "," + numSort3.toString();
    }
    //If the first is largest followed by third and then second
    else if (numSort1 > numSort3 && numSort3 > numSort2) {
        numsorted = numSort1.toString() + "," + numSort3.toString() + "," + numSort2.toString();
    }
    //If the second is largest, followed by first then third
    else if (numSort2 > numSort1 && numSort1 > numSort3) {
        numsorted = numSort2.toString() + "," + numSort1.toString() + "," + numSort3.toString();
    }
    //if the second is largest, followed by third then first
    else if (numSort2 > numSort3 && numSort3 > numSort1) {
        numsorted = numSort2.toString() + "," + numSort3.toString() + "," + numSort1;
    }
    //if the third is largest, followed by second then first
    else if (numSort3 > numSort2 && numSort2 > numSort1) {
        numsorted = numSort3.toString() + "," + numSort2.toString() + "," + numSort1.toString();
    }
    //if the third is the, largest followed by first then second
    else if (numSort3 > numSort1 && numSort1 > numSort2) {
        numsorted = numSort3.toString() + "," + numSort1.toString() + "," + numSort2.toString();
    }
    //if a number isn't inputted
    else {
        numsorted = "Invalid Input";
    }
    document.getElementById("assignment-buttons-3").innerHTML = numsorted;
}
//Determines the sum of all multiples of 3 up until 1000 using for loop
function forSumThrees() {
    let totalsumThrees = 0;
    //for loop that sets what the values start at, end at, and how they increase
    for (let i = 0; i < 1000; i = i + 3) {
        totalsumThrees = totalsumThrees + i;
    }
    document.getElementById("assignment-buttons-4").innerHTML = totalsumThrees;
}
//Determines the sum of all multiples of 3 up until 1000 using while loop
function whileSumThrees() {
    //Tells function where to start, and only operate while it is under 1000, while increasing by 3's
    let totalSum = 0;
    let i = 0;
    while (i < 1000) {
        totalSum += i;
        i = i + 3;
    }
    document.getElementById("assignment-buttons-5").innerHTML = totalSum;
}
//Determines which numbers are multiples of 4 or/and 10 until 100
function tenFour() {
    for (i = 1; i <= 100; i+ 1) {
        //determines which are multiples of both 4 and 10
        if (i % 4 == 0 && i % 10 == 0) {
            console.log("TenFour");
        }
        //determines which are multiples of both 4 
        else if (i % 4 === 0) {
            console.log("Four");
        }
        //determines which are multiples of 10
        else if (i % 10 === 0) {
            console.log("Ten");
        }
        //Determines which are multiples of neither
        else {
            console.log(i);
        }
    }
}
//Determines the century of the year inputted
function centuryFromYear() {
    //Declaring prompt and final output
    let yearEntered = prompt("Enter a yearEntered, find out the century it was in");
    let centuryRecorded = 0;
    //using fomula to calculate and .floor which takes off the decimals
    centuryRecorded = Math.floor(yearEntered / 100 + 1);
    document.getElementById("assignment-buttons-7").innerHTML = centuryRecorded;
}
//Determines the final angle of a triangle when two are inputted
function thirdAngle() {
    //Declaring variables for the angles inputted and the final output
    let angleOne = parseInt(prompt("Enter the first number"));
    let angleTwo = parseInt(prompt("Enter the second number"));
    let totalofPromptAngles = angleOne + angleTwo;
    let angleThree = "";
    //If the two angles add up to more than 180 degrees, the angles cannot be a triangle
    if (totalofPromptAngles >= 180) {
        angleThree = "This exceeds 180 degrees, input invalid";
    }
    //The angles cannot be negative
    else if (angleOne < 0 && angleTwo < 0) {
        angleThree = "Angles cannot be negative";
    }
    //If the angles are not negative or add up to >180 degrees, final angle is calculated
    else {
        angleThree = 180 - angleOne - angleTwo;
    }
    document.getElementById("assignment-buttons-8").innerHTML = angleThree;
}
function function93() {
    alert("Project 9 is in progress");
}