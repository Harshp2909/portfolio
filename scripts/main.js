
function largerNumber() {
    //first function to determine which number is larger with two numbers inputted, output will be larger number
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

function signOfProduct() {
    /*determines whether the sign of the product of multiplying 3 numbers will be positive 
    or negative from input of 3 numbers and outputs sign*/
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

function threeNumberSort() {
    //Sorts 3 inputted numbers numbers from greatest to least
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

function forSumThrees() {
    /*Determines the sum of all multiples of 3 up until 1000 using for loop, 
    outputted in console*/
    let totalsumThrees = 0;
    //for loop that sets what the values start at, end at, and how they increase
    for (let i = 0; i < 1000; i = i + 3) {
        //variable is updated everytime "i" is added
        totalsumThrees = totalsumThrees + i;
    }
    document.getElementById("assignment-buttons-4").innerHTML = totalsumThrees;
}

function whileSumThrees() {
    /*Determines the sum of all multiples of 3 up until 1000 using while loop, 
    outputted in console*/
    //Tells function where to start, and only operate while it is under 1000, while increasing by 3's
    let totalSum = 0;
    let i = 0;
    while (i < 1000) {
        totalSum += i;
        i = i + 3;
    }
    document.getElementById("assignment-buttons-5").innerHTML = totalSum;
}

function tenFour() {
    //logs which numbers are multiples of 4 or/and 10 until 100
    for (i = 1; i <= 100; i++) {
        //determines which are multiples of both 4 and 10
        if (i % 4 == 0 && i % 10 == 0) {
            console.log("TenFour");
        }
        //determines which are multiples of 10
        else if (i % 10 == 0) {
            console.log("Ten");
        }
        //determines which are multiples of both 4 
        else if (i % 4 == 0) {
            console.log("Four");
        }
        //Determines which are multiples of neither
        else {
            console.log(i);
        }
    }
}

function centuryFromYear() {
    /*Using input of a year, outputs the century in which that year was in*/
    //Declaring prompt and final output
    let yearEntered = prompt("Enter a yearEntered, find out the century it was in");
    let centuryRecorded = 0;
    /*using fomula to calculate and .floor which takes off the decimals, .ceiling can also be used but if it 
    is, 1 shouldn't be added*/
    centuryRecorded = Math.floor(yearEntered / 100 + 1);
    if (centuryRecorded)
        document.getElementById("assignment-buttons-7").innerHTML = centuryRecorded;
}

function thirdAngle() {
    //Determines the final angle of a triangle when two are inputted and final unknown angle is outputted
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

/*
function Encryption() {
    //Variables are declared
    let inputtedMessage = prompt("Input the message you would like to be encrypted.");
    let encryptedMessage = "";
    let Letter1 = " ";
    let Letter2 = " ";
    //inputtedMessage is separated into separate words
    inputtedMessage = inputtedMessage.split(" ");

    //Loop allows function to go through each word and encrypt it
    for (let i = 0; i < inputtedMessage.length; i = i + 1) {

        // if input is more than two letters, it will perform the following:
        if (inputtedMessage[i].length > 2) {
            //Store the first letter of the input in memory
            Letter1 = inputtedMessage[i][0];
            console.log(inputtedMessage[i][0])
            //Store the second letter of the input in memory
            Letter2 = inputtedMessage[i][1];
            console.log(inputtedMessage[i][1])
            // Removes the first two letters, saving the remaing letters to encryptedMessage.
            encryptedMessage += (inputtedMessage[i]).slice(2);
            console.log((inputtedMessage[i]).slice(2))
            /* Will encrypt it as following: The first letter, 94{}44erjsda and then the second letter
            encryptedMessage += Letter1 + "94{}44erjsda" + Letter2 + " ";
            console.log(encryptedMessage)
        }
    /*
        else if (inputtedMessage[i].length == 2){
            //Store the third letter of the input in memory
            Letter1 = inputtedMessage[i][0];
            //output will be like this:
            encryptedMessage += (inputtedMessage)[i].slice(1)
            encryptedMessage += "419AP" + Letter1 + " "
        }
    /*
    
        /*Words like a, i, I, A that can be used as a word are given a special encryption value*/
        /*
        else if (inputtedMessage[i] == "a") {
            encryptedMessage += 'Shabalabadingdong'
        }
        else if (inputtedMessage[i] == "i") {
            encryptedMessage += 'Shaden'
        }
        else if (inputtedMessage[i] == "A") {
            encryptedMessage += 'ArcticFox'
        }
        else if (inputtedMessage[i] == "I") {
            encryptedMessage += 'Taataaa'
        }
        document.getElementById("assignment-buttons-9").innerHTML = encryptedMessage;
    }
}
function Decryption() {
    //Declaring variables for function
    let encryptedMessage = prompt("Input the message you would like to be encrypted.");
    let finalDecrypt = "";
    let endingPart = "";
    let findFirstLetter = "";
    let findSecondLetter = "";
    encryptedMessage = encryptedMessage.split(" ");
    for (let i = 0; i < encryptedMessage.length; i = i + 1) {

        // Loop allows the program to go through each word for decryption
        encryptedMessage[i] = encryptedMessage[i].replace(/94{}44erjsda/g,"");
        encryptedMessage[i] = encryptedMessage[i].replace(/419AP/g,"")
        /* Everytime the loop goes through an iteration, it first removes the codewords from the elements to help with the
        decryption.

        if (encryptedMessage[i] == "Shabalabadingdong") {

            finalDecrypt += 'a'
        }
        else if (encryptedMessage[i] == "Shaden") {

            finalDecrypt += 'i'
        }

        else if (encryptedMessage[i] == "ArcticFox") {

            finalDecrypt += 'A'
        }
        else if (encryptedMessage[i] == "Taataaa") {

            finalDecrypt += 'I'
        }
        //when the encyptedMessage is more than two words this condition will be used
        else if (encryptedMessage[i].length > 2) {
            findFirstLetter = encryptedMessage[i][-2]
            console.log(findFirstLetter)
            findSecondLetter = encryptedMessage[i][-1]
            console.log(encryptedMessage)
            endingPart = encryptedMessage[i].slice(0,encryptedMessage.length -4);
            console.log(endingPart)
            finalDecrypt += findFirstLetter + findSecondLetter + endingPart;
        }
    }
    document.getElementById("assignment-buttons-10").innerHTML = finalDecrypt;
}
*/
function Encryption(){
	// Uses a prompt from the user and returns an encrypted version
	let inputtedMessage = prompt("Enter a message to be encrypted");
	let encryptedMessage = "";
	let firstLetter = "";
	let secondLetter = "";
    inputtedMessage = inputtedMessage.split(" ");
		for (let i = 0; i < inputtedMessage.length; i = i + 1){
			if (inputtedMessage[i].length > 2){
				inputtedMessage[i] = inputtedMessage[i].replace(/a/g, "%").replace(/o/g, "~").replace(/l/g, "`"); // Replaces the letter a to s, the letter o to and l to k
				firstLetter = inputtedMessage[i][0];
				secondLetter = inputtedMessage[i][1]; // Saves the second letter of a word
				encryptedMessage += (inputtedMessage[i]).slice(0).slice(1).slice(1);
				encryptedMessage += secondLetter += firstLetter + "sin" + " ";
			} else {
				encryptedMessage += (" " + inputtedMessage[i] + " "); // If length is 2 or less, the message is unaltered
			}
		}
	document.getElementById("assignment-buttons-9").innerHTML = encryptedMessage;
}

function Decryption(){
	let encryptedMessage = document.getElementById("encrypted").innerHTML
	let decrypted = ""; 
	let firstLetter = "";
	let secondLetter = "";
	encryptedMessage = encryptedMessage.split(" ");
	for (let i = 0; i < encryptedMessage.length; i = i + 1){
		if (encryptedMessage[i].length > 2){
			encryptedMessage[i] = encryptedMessage[i].slice(0, -3);
			encryptedMessage[i] = encryptedMessage[i].replace(/%/g, "a").replace(/~/g, "o").replace(/`/g, "l");
			firstLetter = encryptedMessage[i].charAt(encryptedMessage[i].length -1);
			secondLetter = encryptedMessage[i].charAt(encryptedMessage[i].length -2);
			decrypted += firstLetter + secondLetter + encryptedMessage[i].replace(/%/g, "a").replace(/~/g, "o").replace(/`/g, "l").slice(0, ciphertext[x].length -2) + " ";
		} 
        else {
			decrypted += (" " + encryptedMessage[x] + " ");
		}
        document.getElementById("ssignment-buttons-10").innerHTML = decrypted
}	
