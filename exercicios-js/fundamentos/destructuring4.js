function rand([min = 0, max = 1000]) {
  if (min > max) {
    [min, max] = [max, min]; // Swaps the values
  }
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([50, 40])); // min = 40, max = 50
console.log(rand([992])); // min = 992, max = 1000
console.log(rand([, 10])); // min = 0, max = 10
console.log(rand([])); // min = 0, max = 1000
// console.log(rand()); // TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined