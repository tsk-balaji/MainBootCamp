// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let arr = userInput[0];

(function (arr1) {
    if (arr1.toLowerCase() === arr1.split("").reverse().join("").toLowerCase()){
        console.log("Yes");
    } else {
        console.log("No");
    }
})(arr);

  //end-here
});