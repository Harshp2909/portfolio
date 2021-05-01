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
}
 // Random 3 Numbers
  
  // Variables declared in global scope to be used in both encryption and decryption
  let random1 = '';
  let random2 = '';
  let random3 = '';

const random = () => {
  /*
  Generates 3 random integers that are later used in encryption and decryption
  */
  const numbers = Array(9).fill().map((_, index) => index + 1); // Inspired by Felix Lemke on StackOverflow
  numbers.sort(() => Math.random() - 0.5);
  
  //Extracts the first three digits of the numbers array
  random1 = numbers.slice(0, 1);  
  random2 = numbers.slice(1, 2);
  random3 = numbers.slice(2, 3);
}

// Text Encryption Function
  
  // Variables declared in global scope to be used in both encryption and decryption
  let cipherText2 = '';
  let beginning = '';
  let end = '';
  let middle = '';

const encrypt = () => {
  /* 
  encrypt() prompts the user for a message which is then encrypted 
  and output to the answer-box 
  */

  let plainText = prompt('Enter you top secret message here:');
  
  if (plainText === null || plainText == '') { //If nothing is entered

    document.getElementById("assignment-buttons-9").innerHTML =  "You're no fun, enter something to be encrypted"

  } else { //If something is entered

    let reverseText = '';

    for(let i = plainText.length - 1; i > - 1; i--) { //Reverses the order of the message
      reverseText += plainText[i]
    }
    
    //Splits reversed message into 3 parts
    beginning = reverseText.slice(0, Math.ceil(plainText.length/3));
    end = reverseText.slice(-Math.ceil(plainText.length/3));
    middle = reverseText.replace(beginning, '').replace(end, '');

    //Orders the three parts based one the values of the random numbers from random()
    ((plainText.length == 1)
      ? order = plainText
      : (random1 > random2 && random2 > random3) 
      ? order = end.concat(middle).concat(beginning)
      : (random1 > random2 && random2 < random3 && random1 > random3) 
      ? order = middle.concat(end).concat(beginning)
      : (random1 < random2 && random2 > random3 && random1 > random3)
      ? order =  end.concat(beginning).concat(middle)
      : (random1 < random2 && random2 > random3 && random1 < random3)
      ? order = beginning.concat(end).concat(middle)
      : (random1 > random2 && random2 < random3 && random1 < random3)
      ? order =  middle.concat(beginning).concat(end)
      : (random1 < random2 && random2 < random3)
      ? order = beginning.concat(end).concat(middle)
      : order = end.concat(beginning).concat(middle)
    );
    
    let disorder = order.split(''); //Creates an array of the order variable
    let cipherText = '';
    
    for(let i = 0; i < disorder.length; i++) { //Loops through disorder and for each character, assigns the encrypted character to cipherText

      ((disorder[i] == ' ') ? cipherText += 'Ξ'
        : (disorder[i] == '1') ? cipherText += '@' : (disorder[i] == '2') ? cipherText += 'ͷ'
        : (disorder[i] == '3') ? cipherText += 'ᾮ' : (disorder[i] == '4') ? cipherText += 'ꬩ'
        : (disorder[i] == '5') ? cipherText += '᎒' : (disorder[i] == '6') ? cipherText += '‼'
        : (disorder[i] == '7') ? cipherText += '⁈' : (disorder[i] == '8') ? cipherText += 'Ѡ'
        : (disorder[i] == '9') ? cipherText += '⑫' : (disorder[i] == '0') ? cipherText += '҉'
        : (disorder[i] == '!') ? cipherText += 'ɇ' : (disorder[i] == '@') ? cipherText += '0' 
        : (disorder[i] == '#') ? cipherText += '8' : (disorder[i] == '$') ? cipherText += '₪'
        : (disorder[i] == '%') ? cipherText += '4' : (disorder[i] == '^') ? cipherText += '6'
        : (disorder[i] == '&') ? cipherText += '9' : (disorder[i] == '*') ? cipherText += '1'
        : (disorder[i] == '(') ? cipherText += '2' : (disorder[i] == ')') ? cipherText += 'ﾈ'
        : (disorder[i] == '_') ? cipherText += ')' : (disorder[i] == '-') ? cipherText += '('
        : (disorder[i] == '=') ? cipherText += 'σ' : (disorder[i] == '+') ? cipherText += '&'
        : (disorder[i] == "'") ? cipherText += 'r' : (disorder[i] == '"') ? cipherText += '*'
        : (disorder[i] == ';') ? cipherText += '$' : (disorder[i] == ':') ? cipherText += 'T'
        : (disorder[i] == '.') ? cipherText += '^' : (disorder[i] == ',') ? cipherText += '?'
        : (disorder[i] == '>') ? cipherText += 'S' : (disorder[i] == '<') ? cipherText += 'l'
        : (disorder[i] == '?') ? cipherText += '}' : (disorder[i] == '[') ? cipherText += '|'
        : (disorder[i] == ']') ? cipherText += 'q' : (disorder[i] == '}') ? cipherText += 'F'
        : (disorder[i] == '{') ? cipherText += 'N' : (disorder[i] == '`') ? cipherText += 'ഉ' 
        : (disorder[i] == '~') ? cipherText += 'R' : (disorder[i] == '|') ? cipherText += 'a'
        : (disorder[i] == 'a') ? cipherText += 'X' : (disorder[i] == 'b') ? cipherText += '╳'
        : (disorder[i] == 'c') ? cipherText += '‡' : (disorder[i] == 'd') ? cipherText += 'ℍ'
        : (disorder[i] == 'e') ? cipherText += '∰' : (disorder[i] == 'f') ? cipherText += 'ↂ'
        : (disorder[i] == 'g') ? cipherText += '◎' : (disorder[i] == 'h') ? cipherText += '⛔'
        : (disorder[i] == 'i') ? cipherText += 'ക' : (disorder[i] == 'j') ? cipherText += 'ↆ'
        : (disorder[i] == 'k') ? cipherText += '高' : (disorder[i] == 'l') ? cipherText += '╯'
        : (disorder[i] == 'm') ? cipherText += 'ﬗ' : (disorder[i] == 'n') ? cipherText += '≋'
        : (disorder[i] == 'o') ? cipherText += '→' : (disorder[i] == 'p') ? cipherText += '⚡'
        : (disorder[i] == 'q') ? cipherText += '⎳' : (disorder[i] == 'r') ? cipherText += '▓'
        : (disorder[i] == 's') ? cipherText += '⌛' : (disorder[i] == 't') ? cipherText += 'Ͳ'
        : (disorder[i] == 'u') ? cipherText += '▛' : (disorder[i] == 'v') ? cipherText += '◪'
        : (disorder[i] == 'w') ? cipherText += 'ɀ' : (disorder[i] == 'x') ? cipherText += '☹' 
        : (disorder[i] == 'y') ? cipherText += '♪' : (disorder[i] == 'z') ? cipherText += '⒵' 
        : (disorder[i] == 'A') ? cipherText += '☢' : (disorder[i] == 'B') ? cipherText += 'z' 
        : (disorder[i] == 'C') ? cipherText += 'Й' : (disorder[i] == 'D') ? cipherText += '∎'
        : (disorder[i] == 'E') ? cipherText += 'Ж' : (disorder[i] == 'F') ? cipherText += '®'
        : (disorder[i] == 'G') ? cipherText += '©' : (disorder[i] == 'H') ? cipherText += '¶'
        : (disorder[i] == 'I') ? cipherText += 'þ' : (disorder[i] == 'J') ? cipherText += 'æ' 
        : (disorder[i] == 'K') ? cipherText += 'Ð' : (disorder[i] == 'L') ? cipherText += '½'
        : (disorder[i] == 'M') ? cipherText += '¢' : (disorder[i] == 'N') ? cipherText += 'ހ'
        : (disorder[i] == 'O') ? cipherText += 'ﻊ' : (disorder[i] == 'P') ? cipherText += 'ຣ'
        : (disorder[i] == 'Q') ? cipherText += 'ວ' : (disorder[i] == 'R') ? cipherText += 'ﺾ'
        : (disorder[i] == 'S') ? cipherText += 'Ꮂ' : (disorder[i] == 'T') ? cipherText += 'ઊ'
        : (disorder[i] == 'U') ? cipherText += 'Δ' : (disorder[i] == 'V') ? cipherText += 'ӻ'
        : (disorder[i] == 'W') ? cipherText += 'ӿ' : (disorder[i] == 'X') ? cipherText += 'Ф'
        : (disorder[i] == 'Y') ? cipherText += 'Ѫ' : (disorder[i] == 'Z') ? cipherText += 'Ƶ'
        : cipherText += disorder[i]
      )

      cipherText2 = cipherText //Assigns the global variable, cipherText2, the value of cipherText

    }
      
    document.getElementById("assignment-buttons-9").innerHTML = cipherText; //Outputs the encrypted message to 'answer-box'

  }
}
// Text Decryption Function
function decrypt() {
  /* 
  decrypt() takes the users encryted message, decrypts it,  
  and outputs their original message to the answer-box 
  */

  let disorder = ''; //Declaring an empty string variable
  
  for(let i = 0; i < cipherText2.length; i++) {  //Loops through cipherText2 and for each character, assigns the decrypted character to disorder
 
    ((cipherText2[i] == 'Ξ') ? disorder += ' '
      : (cipherText2[i] == '@') ? disorder += '1' : (cipherText2[i] == 'ͷ') ? disorder += '2'
      : (cipherText2[i] == 'ᾮ') ? disorder += '3' : (cipherText2[i] == 'ꬩ') ? disorder += '4'
      : (cipherText2[i] == '᎒') ? disorder += '5' : (cipherText2[i] == '‼') ? disorder += '6'
      : (cipherText2[i] == '⁈') ? disorder += '7' : (cipherText2[i] == 'Ѡ') ? disorder += '8'
      : (cipherText2[i] == '⑫') ? disorder += '9' : (cipherText2[i] == '҉') ? disorder += '0'
      : (cipherText2[i] == 'ɇ') ? disorder += '!' : (cipherText2[i] == '0') ? disorder += '@'
      : (cipherText2[i] == '8') ? disorder += '#' : (cipherText2[i] == '₪') ? disorder += '$'
      : (cipherText2[i] == '4') ? disorder += '%' : (cipherText2[i] == '6') ? disorder += '^'
      : (cipherText2[i] == '9') ? disorder += '&' : (cipherText2[i] == '1') ? disorder += '*'
      : (cipherText2[i] == '2') ? disorder += '(' : (cipherText2[i] == 'ﾈ') ? disorder += ')'
      : (cipherText2[i] == ')') ? disorder += '_' : (cipherText2[i] == '(') ? disorder += '-'
      : (cipherText2[i] == 'σ') ? disorder += '=' : (cipherText2[i] == '&') ? disorder += '+'
      : (cipherText2[i] == 'r') ? disorder += "'" : (cipherText2[i] == '*') ? disorder += '"'
      : (cipherText2[i] == '$') ? disorder += ';' : (cipherText2[i] == 'T') ? disorder += ':'
      : (cipherText2[i] == '^') ? disorder += '.' : (cipherText2[i] == '?') ? disorder += ','
      : (cipherText2[i] == 'S') ? disorder += '>' : (cipherText2[i] == 'l') ? disorder += '<'
      : (cipherText2[i] == '}') ? disorder += '?' : (cipherText2[i] == '|') ? disorder += '['
      : (cipherText2[i] == 'q') ? disorder += ']' : (cipherText2[i] == 'F') ? disorder += '}'
      : (cipherText2[i] == 'N') ? disorder += '{' : (cipherText2[i] == 'ഉ') ? disorder += '`'
      : (cipherText2[i] == 'R') ? disorder += '~' : (cipherText2[i] == 'a') ? disorder += '|'
      : (cipherText2[i] == 'X') ? disorder += 'a' : (cipherText2[i] == '╳') ? disorder += 'b'
      : (cipherText2[i] == '‡') ? disorder += 'c' : (cipherText2[i] == 'ℍ') ? disorder += 'd'
      : (cipherText2[i] == '∰') ? disorder += 'e' : (cipherText2[i] == 'ↂ') ? disorder += 'f'
      : (cipherText2[i] == '◎') ? disorder += 'g': (cipherText2[i] == '⛔') ? disorder += 'h'
      : (cipherText2[i] == 'ക') ? disorder += 'i' : (cipherText2[i] == 'ↆ') ? disorder += 'j'
      : (cipherText2[i] == '高') ? disorder += 'k' : (cipherText2[i] == '╯') ? disorder += 'l'
      : (cipherText2[i] == 'ﬗ') ? disorder += 'm' : (cipherText2[i] == '≋') ? disorder += 'n'
      : (cipherText2[i] == '→') ? disorder += 'o' : (cipherText2[i] == '⚡') ? disorder += 'p'
      : (cipherText2[i] == '⎳') ? disorder += 'q' : (cipherText2[i] == '▓') ? disorder += 'r'
      : (cipherText2[i] == '⌛') ? disorder += 's' : (cipherText2[i] == 'Ͳ') ? disorder += 't'
      : (cipherText2[i] == '▛') ? disorder += 'u' : (cipherText2[i] == '◪') ? disorder += 'v'
      : (cipherText2[i] == 'ɀ') ? disorder += 'w' : (cipherText2[i] == '☹') ? disorder += 'x' 
      : (cipherText2[i] == '♪') ? disorder += 'y' : (cipherText2[i] == '⒵') ? disorder += 'z'
      : (cipherText2[i] == '☢') ? disorder += 'A' : (cipherText2[i] == 'z')  ? disorder += 'B'
      : (cipherText2[i] == 'Й') ? disorder += 'C' : (cipherText2[i] == '∎') ? disorder += 'D'
      : (cipherText2[i] == 'Ж') ? disorder += 'E' : (cipherText2[i] == '®') ? disorder += 'F'
      : (cipherText2[i] == '©') ? disorder += 'G' : (cipherText2[i] == '¶') ? disorder += 'H'
      : (cipherText2[i] == 'þ') ? disorder += 'I' : (cipherText2[i] == 'æ') ? disorder += 'J'
      : (cipherText2[i] == 'Ð') ? disorder += 'K' : (cipherText2[i] == '½') ? disorder += 'L' 
      : (cipherText2[i] == '¢') ? disorder += 'M' : (cipherText2[i] == 'ހ') ? disorder += 'N' 
      : (cipherText2[i] == 'ﻊ') ? disorder += 'O' : (cipherText2[i] == 'ຣ') ? disorder += 'P' 
      : (cipherText2[i] == 'ວ') ? disorder += 'Q' : (cipherText2[i] == 'ﺾ') ? disorder += 'R' 
      : (cipherText2[i] == 'Ꮂ') ? disorder += 'S' : (cipherText2[i] == 'ઊ') ? disorder += 'T' 
      : (cipherText2[i] == 'Δ') ? disorder += 'U' : (cipherText2[i] == 'ӻ') ? disorder += 'V' 
      : (cipherText2[i] == 'ӿ') ? disorder += 'W' : (cipherText2[i] == 'Ф') ? disorder += 'X' 
      : (cipherText2[i] == 'Ѫ') ? disorder += 'Y' : (cipherText2[i] == 'Ƶ') ? disorder += 'Z' 
      : disorder += cipherText2[i]
    )
    
  }

  if (disorder.length == 1){ //If only 1 characer was initially input

    document.getElementById("assignment-buttons-10").innerHTML = disorder

  } else { //If multiple characters were initially input

      reverseText = beginning.concat(middle).concat(end) //Puts message reversed order
      
      let plainText = '';

      for(let i = reverseText.length - 1; i > - 1; i--) { //Reverses the reversed message 
        plainText += reverseText[i]
      }
      
      document.getElementById("assignment-buttons-10").innerHTML = plainText; //Outputs the decrypted message to 'answer-box'
  } 
  
}