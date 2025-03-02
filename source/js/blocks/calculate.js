document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".calculate__form");
  const resultTable = document.getElementById("bmi-result-table").getElementsByTagName("tbody")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Очищаем таблицу перед новым расчетом
    resultTable.innerHTML = "";

    // Получаем значения полей
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);

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
    if (isNaN(activity) || activity <= 0) {
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

    // Рассчитываем BMR
    let bmr;
    if (gender === "male") {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    bmr = bmr.toFixed(2);

    // Рассчитываем TDEE
    const tdee = (bmr * activity).toFixed(2);

    // Рассчитываем Ideal Body Weight (IBW)
    const ibw = gender === "male" ? (50 + (0.91 * (height - 152.4))).toFixed(2) : (45.5 + (0.91 * (height - 152.4))).toFixed(2);

    // Рассчитываем Body Fat Percentage (BFP)
    const bfp = gender === "male" ? ((1.20 * bmi) + (0.23 * age) - 16.2).toFixed(2) : ((1.20 * bmi) + (0.23 * age) - 5.4).toFixed(2);

    // Рассчитываем Lean Body Mass (LBM)
    const lbm = gender === "male" ? ((0.407 * weight) + (0.267 * height) - 19.2).toFixed(2) : ((0.252 * weight) + (0.473 * height) - 48.3).toFixed(2);

    // Рассчитываем Total Body Water (TBW)
    const tbw = gender === "male" ? (weight * 0.6).toFixed(2) : (weight * 0.5).toFixed(2);

    // Добавляем результат в таблицу
    const newRow = resultTable.insertRow(-1);
    newRow.innerHTML = `<td>${bmi}</td><td>${category}</td>`;
    const newRowBmr = resultTable.insertRow(-1);
    newRowBmr.innerHTML = `<td>BMR: ${bmr}</td><td>TDEE: ${tdee}</td>`;
    const newRowIbw = resultTable.insertRow(-1);
    newRowIbw.innerHTML = `<td>IBW: ${ibw} kg</td><td>BFP: ${bfp}%</td>`;
    const newRowLbm = resultTable.insertRow(-1);
    newRowLbm.innerHTML = `<td>LBM: ${lbm} kg</td><td>TBW: ${tbw} L</td>`;
  });
});
