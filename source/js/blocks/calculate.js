document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".calculate__form");
  const resultTable = document.getElementById("bmi-result-table").getElementsByTagName("tbody")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Получаем значения полей
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;

    // Валидация
    if (isNaN(height) || height <= 0) {
      alert("Введите корректный рост в см.");
      return;
    }
    if (isNaN(weight) || weight <= 0) {
      alert("Введите корректный вес в кг.");
      return;
    }
    if (isNaN(age) || age <= 0) {
      alert("Введите корректный возраст.");
      return;
    }
    if (!gender) {
      alert("Выберите пол.");
      return;
    }
    if (!activity) {
      alert("Выберите степень активности.");
      return;
    }

    // Рассчитываем BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Определяем категорию
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // Добавляем результат в таблицу
    const newRow = resultTable.insertRow(-1);
    newRow.innerHTML = `<td>${bmi}</td><td>${category}</td>`;
  });
});
