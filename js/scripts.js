function robogerProcess() {
  let outputArray = [];
  let userInput = parseInt(document.getElementById("userInput").value);

  console.log(userInput);

  for (index = 0; index <= userInput; index += 1) {
    //let inputArray = [];
    let inputArray = index.toString().split("");

    //console.log('temp values')
    //console.log(temp);
    //console.log(temp.includes('1'));

    //console.log('array values')
    //inputArray.push(temp);
    // console.log(inputArray);
    // console.log(inputArray.includes('1'));
    if (inputArray.includes('3')) {
      console.log("3 found");
      outputArray.push("Won't you be my neighbor?");
    } else if (inputArray.includes('2')) {
      console.log("2 found");
      outputArray.push("Boop!");
    } else if (inputArray.includes('1')) {
      console.log("1 found");
      outputArray.push("Beep!");
    } else {
      console.log("failed");
      outputArray.push(inputArray.join(""));
      
      // console.log("nothing to replace here sir");
    }
    console.log(outputArray);
  }
};

//   processArray.forEach(function(element) {
//     for (let index = element.length - 1; index >= 0; index--) {
      // if (element[index] === "3") {
      //   console.log("3 found");
      //   outputArray.push("Won't you be my neighbor?");
      //   element.concat("");
      //   console.log(element);
      // } else if (element[index] === "2") {
      //   console.log("2 found");
      //   outputArray.push("Boop!");
      // } else if (element[index] === "1") {
      //   console.log("1 found");
      //   outputArray.push("Beep!");
      // } else {
      //   console.log(element);
      //   console.log("nothing to replace here sir");
      //   outputArray.push(element.join());
      // }
//     };
//   });

//   console.log(processArray);
//   console.log(outputArray);

// }

window.addEventListener("load", function() {
  const form = document.getElementById("RobogerInput");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  robogerProcess();
};