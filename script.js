document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  // Проверка наличия элементов
  if (hamburger && navbar) {
    // Переключение мобильного меню
    hamburger.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  } else {
    console.error("Элементы меню не найдены");
  }

  // Калькулятор ИМТ
  const bmiForm = document.getElementById('bmiForm');
  const resultDiv = document.getElementById('result');

  bmiForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0.00 && height > 0.00) {
      const bmi = weight / (height * height);
      let advice = '';

      if (bmi < 18.5) {
        advice = 'Ваш ИМТ ниже нормы. Рекомендуем увеличить калорийность рациона и проконсультироваться с врачом.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        advice = 'Ваш ИМТ в норме. Продолжайте поддерживать здоровый образ жизни!';
      } else if (bmi >= 25 && bmi < 29.9) {
        advice = 'Ваш ИМТ выше нормы. Рассмотрите возможность снижения веса через диету и физическую активность.';
      } else {
        advice = 'Ваш ИМТ значительно выше нормы. Рекомендуем обратиться к специалисту для получения рекомендаций.';
      }

      resultDiv.innerHTML = `Ваш ИМТ: ${bmi.toFixed(2)}. ${advice}`;
    } else {
      resultDiv.innerHTML = 'Пожалуйста, введите корректные значения.';
    }
  });
});
