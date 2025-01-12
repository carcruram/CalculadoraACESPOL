document.addEventListener('DOMContentLoaded', () => {
    const questionsInput = document.getElementById('questions');
    const alternativesInput = document.getElementById('alternatives');
    const correctInput = document.getElementById('correct');
    const errorsInput = document.getElementById('errors');
    const resultDiv = document.getElementById('result');

    function calculateGrade() {
        const P = parseFloat(questionsInput.value);
        const n = parseFloat(alternativesInput.value);
        const A = parseFloat(correctInput.value);
        const E = parseFloat(errorsInput.value);
        
        if (P < 0 || n < 0 || A < 0 || E < 0) {
            resultDiv.textContent = 'Por favor, ingrese valores positivos.';
            resultDiv.style.color = 'black';
        } else if (isNaN(P) || isNaN(n) || isNaN(A) || isNaN(E) || n <= 1) {
            resultDiv.textContent = 'Por favor, ingrese todos los valores correctamente.';
            resultDiv.style.color = 'black';
        } else if (P < (A + E)) {
            resultDiv.textContent = 'Por favor, ingrese valores válidos.';
            resultDiv.style.color = 'black';
        } else {
            const grade = ((A - E / (n - 1)) * 10) / P;
            const color = getColorForGrade(grade);
            resultDiv.style.color = color;
            if(grade < 0) {
                resultDiv.textContent = `NOTA FINAL: 0.00`;
            } else{
                resultDiv.textContent = `NOTA FINAL: ${grade.toFixed(2)}`;
            }
        }
    }

    function getColorForGrade(grade) {
        const red = Math.min(255, Math.max(0, 255 - (grade * 25.5)));
        const green = Math.min(255, Math.max(0, grade * 25.5));
        return `rgb(${red}, ${green}, 0)`;
    }

    questionsInput.addEventListener('input', calculateGrade);
    alternativesInput.addEventListener('input', calculateGrade);
    correctInput.addEventListener('input', calculateGrade);
    errorsInput.addEventListener('input', calculateGrade);
});