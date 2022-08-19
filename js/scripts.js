function robogerProcess() {
  let inputArray = [];
  let processArray = [];
  let outputArray = [];
  let userInput = parseInt(document.getElementById("userInput").value);


  for (index = 0; index <= userInput; index += 1) {
    inputArray.push(index.toString());
  }

  console.log(inputArray);

  inputArray.forEach(function(element) {
    processArray.push((element).split(""));
  });

  processArray.forEach(function(element) {
    for (let index = element.length - 1; index >= 0; index--) {
      if (element[index] === "3") {
        console.log("3 found");
        processArray.element.join("");
        outputArray.push("Won't you be my neighbor?");
      } else if (element[index] === "2") {
        console.log("2 found");
        processArray.element.join("");
        outputArray.push("Boop!");
      } else if (element[index] === "1") {
        console.log("1 found");
        processArray.element.join("");
        outputArray.push("Beep!");
      } else {
        console.log(element);
        console.log("nothing to replace here sir");
        processArray.element.join("");
      }
    };
  });

  // for (let index = 0; index < processArray.length; index += 1) {
  //   console.log(index);
  //   processArray = inputArray[index].toString.split(" ");
  //   console.log(processArray[index]);
  // }

  console.log(processArray);
  // console.log(outputArray);

}

window.addEventListener("load", function() {
  const form = document.getElementById("trackerForm");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  robogerProcess();
};