let inputArray = [];
let processArray = [];
let outputArray = [];
let userInput = "14";

function robogerProcess() {
  for (index = 0; index <= userInput; index += 1) {
    inputArray.push(index.toString());
  }

  console.log(inputArray);

  inputArray.forEach(function(element) {
    processArray.push((element).split(""));
  });

  processArray.forEach(function(element) {
    console.log(element);
    for (let index = element.length -1; index >= 0; index--) {
      console.log(element[index]);
      if (element[index] === "3") {
        console.log("3 found");
        processArray.splice(element, 1, "");
        outputArray.push("Won't you be my neighbor?")
      } else if (element[index] === "2") {
        console.log("2 found");
        processArray.splice(element, 1, "");
        outputArray.push("Boop!")
      } else if (element[index] === "1") {
        console.log("1 found");
        processArray.splice(element, 1, "");
        outputArray.push("Beep!")
      } else {
        console.log("nothing to replace here sir");
        outputArray.push(element.toString());
      }
    }
  });

  // for (let index = 0; index < processArray.length; index += 1) {
  //   console.log(index);
  //   processArray = inputArray[index].toString.split(" ");
  //   console.log(processArray[index]);
  // }

  console.log(processArray);
  console.log(outputArray);

}

