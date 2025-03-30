document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM полностью загружен и разобран.");

    const bmiForm = document.getElementById('bmiForm');
    const resultDiv = document.getElementById('result');

    if (bmiForm && resultDiv) {
        bmiForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);

            // Проверка диапазонов и точности
            const weightIsValid = weight >= 1 && weight <= 120 && weight * 10 % 1 === 0; // до 1 знака после запятой
            const heightIsValid = height >= 0.01 && height <= 250 && height * 100 % 1 === 0; // до 2 знаков после запятой

            if (weightIsValid && heightIsValid) {
                const bmi = weight / (height * height);
                resultDiv.innerHTML = `Ваш ИМТ: ${bmi.toFixed(2)}`;
            } else {
                resultDiv.innerHTML = 'Пожалуйста, введите корректные значения.';
            }
        });
    } else {
        console.error("Форма или элемент результата не найдены.");
    }
});
