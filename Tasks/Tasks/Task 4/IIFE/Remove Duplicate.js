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
  let arr = userInput[0].split(" ").map(Number);
  let arrWithoutDuplicates = [];
  
  (function(arr1){
        for (i=0; i < arr1.length ; i++){
            if ( arrWithoutDuplicates.includes(arr1[i])){
                
            }
            else{
                arrWithoutDuplicates.push(arr1[i]);
            }
        }
        console.log(arrWithoutDuplicates);
        
  })(arr);

  
  //end-here
});