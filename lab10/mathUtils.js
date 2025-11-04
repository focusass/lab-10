
export function percentOf(num, percent) {
  return (num * percent) / 100;
}

// Прибавление процента к числу
export function addPercent(num, percent) {
  return num + percentOf(num, percent);
}
