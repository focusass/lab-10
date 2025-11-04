Лабораторная работа №10 — Модульность JS
1. Цель работы

Изучить принципы модульности программ.

Освоить использование ES-модулей (import/export) в JavaScript.

Научиться организовывать структуру проекта с разделением логики на отдельные файлы.

2. Краткое описание задания

Разработать небольшое приложение с модульной структурой.
Пример проекта: Калькулятор процентов, который умеет:

вычислять процент от числа,

добавлять процент к числу,

выводить результат в браузере с форматированием.

Проект содержит минимум 3 JS-модуля и один HTML-файл.


4. Листинг кода
index.html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Калькулятор процентов — Модульность JS</title>
</head>
<body>
  <script type="module" src="./main.js"></script>
</body>
</html>

mathUtils.js
// Математические функции
export function percentOf(num, percent) {
  return (num * percent) / 100;
}

export function addPercent(num, percent) {
  return num + percentOf(num, percent);
}

formatter.js
// Форматирование результата
export function formatResult(label, value) {
  return `${label}: ${value.toFixed(2)}`;
}

main.js
import { percentOf, addPercent } from './mathUtils.js';
import { formatResult } from './formatter.js';

const num = 200;
const percent = 15;

const result1 = percentOf(num, percent);
const result2 = addPercent(num, percent);

document.body.innerHTML = `
  <h2>Калькулятор процентов — Модульность JS</h2>
  <p>${formatResult('15% от числа 200', result1)}</p>
  <p>${formatResult('200 + 15%', result2)}</p>
`;

Калькулятор процентов — Модульность JS
15% от числа 200: 30.00
200 + 15%: 230.00