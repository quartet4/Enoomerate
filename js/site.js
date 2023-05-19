// controller function
function getValues() {
  // get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // parse into ints
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    if (
      startValue <= 100 &&
      startValue >= -100 &&
      endValue <= 100 &&
      endValue >= -100
    ) {
      // call generateNumbers
      let numbers = generateNumbers(startValue, endValue);

      // call displayNumbers
      displayNumbers(numbers);
    } else {
      alert("You must enter integers between -100 and 100");
    }
  } else {
    alert("You must enter integers.");
  }
}

// logic function(s)
function generateNumbers(startValue, endValue) {
  // generate numbers from startValue to endValue
  let numbers = [];

  // we want to get all numbers from start to end
  if (startValue <= endValue) {
    for (let index = startValue; index <= endValue; index++) {
      numbers.push(index);
    }
  } else {
    for (let index = startValue; index >= endValue; index--) {
      numbers.push(index);
    }
  }

  return numbers;
}

// display or view function(s)
function displayNumbers(numbers) {
  let templateRows = "";
  let className = "";

  // display the numbers and mark even numbers bold
  numbers.forEach((element) => {
    if (element % 2 === 0) className = "even";
    else className = "odd";

    templateRows += `<tr><td class="${className}">${element}</td></tr>`;
  });

  document.getElementById("results").innerHTML = templateRows;
}
