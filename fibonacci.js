function fibonacci(iterations) {
  if (iterations < 1) return "Input too small";
  if (iterations < 3) return iterations - 1;
  return fibonacci(iterations - 1) + fibonacci(iterations - 2);
}

console.clear();
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
