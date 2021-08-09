// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
/////////////////////////////////////////////////// Todd's Pseudo Code ///////////////////////////////////////////////////
// first step is to write a test and get a successful Fail
// I know that my parameters are the secretCodeWords 1, 2 and 3
// In the function that I wrote are used a couple of things The reduce function allows it to go through your strings and read it the accumulator accumulates it and as it accumulated the reducer sees that 
// the current value of a = 4 and so forth and so forth accumulating those values and tell them you get the expected output.
// This one threw me for a loop for at least a couple hours until I did my research and remembered the reduce function.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variables provided.
describe("sercretCode", () => {
    test("takes in a string and returns a coded message.", () => {
        var secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        expect(sercretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        var secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k" 
        expect(sercretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        var secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(sercretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// b) Create the function that makes the test pass.
const sercretCode = (string) => {

    const secretArr = string.split('');
    const codedMessage = secretArr.reduce((accum, currVal) => {

        if(currVal == 'a' || currVal == 'A') {
            accum = accum + '4';
        }else if (currVal == 'e' || currVal == 'E') {
            accum = accum + '3';
        }else if (currVal == 'i' || currVal == 'I') {
            accum = accum + '1';
        }else if (currVal == 'o' || currVal == 'O') {
            accum = accum + '0';
        }else {
            accum = accum + currVal;
        }

        return accum;

    }, '');
    

    return codedMessage;

}



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.
/////////////////////////////////////////////////// Todd's Pseudo Code ///////////////////////////////////////////////////
// You guys of always taught us to look at the question and break it down
// So the first step is to create a function findingLetter, Parmeter - array, Iterate - .forEach.
// Now that I have my functionin it was able to go through the array, find all the words 
// that have the letter a in them and display them.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variable provided.
describe("findingLetter", () => {
    test("takes in an array and returns all the words that contain the letter a.", () => {
       var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
       // Expected output: ["Apple", "Banana", "Orange"]
       expect(findingLetter(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
       var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
       // Expected output: ["Mango", "Apricot", "Peach"]
       expect(findingLetter(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
})
// b) Create the function that makes the test pass.
const findingLetter = (arr) => {
    let containsLetterA = [];
    arr.forEach(word => {
        if(word.toLowerCase().indexOf('a') !== -1) {
            containsLetterA.push(word);
        }
    });

    return containsLetterA;
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
/////////////////////////////////////////////////// Todd's Pseudo Code ///////////////////////////////////////////////////
// this one give me fits and took me a long time to mentally process what I needed to do.
// I tried breaking it down into two different array's and then evaluating those array's the first array was 
// three and the second array was two then return true if not return false.
// I think my idea is correct but the logic is what I was having a hard time with it.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// a) Create a test with an expect statement using the variable provided.
describe("fullhouse", () => {
    test("takes in an array of 5 numbers and determines whether or not the array has 2 of the numbers and 3 of the same numbers", () => {
       var hand1 = [5, 5, 5, 3, 3]
       // Expected output: true
       expect(fullhouse(hand1)).toEqual("true")
       var hand2 = [5, 5, 3, 3, 4]
       // Expected output: false
       expect(fullhouse(hand2)).toEqual("false")
       var hand3 = [5, 5, 5, 5, 4]
       // Expected output: false
       expect(fullhouse(hand3)).toEqual("false")
    })
})
// b) Create the function that makes the test pass.

const fullHouse = (arr) => {
    let firstArr = [];
    let secondArr = [];
    
    for(let i = 0; i < arr.length; i++){
      if(i === 0) {
         firstArr.push(arr[i]);
      }else if(arr[i] === firstArr[0]) {
        firstArr.push(arr[i]);
      }else if(secondArr.length === 0) {
        secondArr.push(arr[i]);
      }else if(arr[i] === secondArr[0]) {
        secondArr.push(arr[i]);
      }
    }
    
    if(firstArr.length === 2 && secondArr.length === 3 || firstArr.length === 3 && secondArr.length === 2) {
      return true;
    }
    
    return false;
      
    
  }
 