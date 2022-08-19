let inputArray = [];
let processArray = [];
let outputArray = [];
let userInput = "13 14 15 16 17";

function robogerProcess() {
  inputArray = userInput.split(" ");

  inputArray.forEach(function(element) {
    console.log(element);
    processArray.push((element).split(""));
  });

  console.log(processArray);

  for (let index = 0; index < processArray.length; index +=1) {
    console.log(index);
  }
  console.log(processArray);


  // for (let index = 0; index < processArray.length; index += 1) {
  //   console.log(index);
  //   processArray = inputArray[index].toString.split(" ");
  //   console.log(processArray[index]);
  // }



}

