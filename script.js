// Function to append characters to the display
function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('result').value = '';
}

// Function to delete one character from the display
function deleteChar() {
  let display = document.getElementById('result');
  let currentValue = display.value;
  display.value = currentValue.substring(0, currentValue.length - 1);
}

// Function to calculate the expression in the display
function calculate() {
  let expression = document.getElementById('result').value;
  let result;

  try {
      result = eval(expression); // Using eval to evaluate the expression
  } catch (error) {
      result = 'Error'; // Display 'Error' if evaluation fails
  }

  document.getElementById('result').value = result;
}
