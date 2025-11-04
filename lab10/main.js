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
