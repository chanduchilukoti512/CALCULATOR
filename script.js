let currentValue = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('result').value = currentValue;
}

function operation(op) {
  currentValue += ` ${op} `;
  document.getElementById('result').value = currentValue;
}

function clearResult() {
  currentValue = '';
  document.getElementById('result').value = '';
}

function backspace() {
  currentValue = currentValue.slice(0, -1);
  document.getElementById('result').value = currentValue;
}

function resetCalculator() {
  currentValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    currentValue = eval(currentValue.replace(/ /g, ''));
    document.getElementById('result').value = currentValue;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
