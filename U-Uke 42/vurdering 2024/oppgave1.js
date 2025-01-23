function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.querySelector('input[name="operation"]:checked').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Vennligst skriv inn gyldige tall.';
        return;
    }

    if (operation === 'sum') {
        result = num1 + num2;
        document.getElementById('result').textContent = `${num1} + ${num2} = ${result}`;
    } else {
        result = num1 - num2;
        document.getElementById('result').textContent = `${num1} - ${num2} = ${result}`;
    }
}