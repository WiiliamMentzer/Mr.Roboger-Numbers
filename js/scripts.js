let inputArray = [];
let processArray = [];
let outputArray = [];
let userInput = "13 24 34 55 78";

function robogerProcess() {
  inputArray = userInput.split(" ");

  inputArray.forEach(function(element) {
    console.log(element);
    processArray.push((element).split(""));
  });

  processArray.forEach(function(element) {
    console.log(element);
    for (let index = 0; index < element.length; index +=1) {
      console.log(element[index]);
      if (element[index] === 3) {
        console.log("3 found");
      } else if (element[index] === 2) {
        console.log("2 found");
      } else if (element[index] === 1) {
        console.log("1 found");
      } else {
        console.log("nothing to replace here sir");
      }
    }
  });

  // for (let index = 0; index < processArray.length; index += 1) {
  //   console.log(index);
  //   processArray = inputArray[index].toString.split(" ");
  //   console.log(processArray[index]);
  // }



}

