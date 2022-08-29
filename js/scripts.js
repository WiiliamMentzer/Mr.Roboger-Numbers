function robogerProcess() {
  let outputArray = [];
  let userInput = parseInt(document.getElementById("userInput").value);

  for (index = 0; index <= userInput; index += 1) {
    let inputArray = index.toString().split("");
  
    if (inputArray.includes('3')) {
      outputArray.push("Won't you be my neighbor?");
    } else if (inputArray.includes('2')) {
      outputArray.push("Boop!");
    } else if (inputArray.includes('1')) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(inputArray.join(""));
    }
  }

  if (isNaN(userInput) || userInput === undefined) {
    document.querySelector("p#ArrayDisplay").innerHTML = "You have not entered a correct value into the field, please try again.";
  } else {
    document.querySelector("p#ArrayDisplay").innerHTML = outputArray.join(", ");
  }
};

window.addEventListener("load", function() {
  const form = document.getElementById("RobogerInput");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  robogerProcess();
};