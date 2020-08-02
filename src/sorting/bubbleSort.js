const numbers = [6, 4, 5, 3, 2, 1];
for (let i = 0, size = numbers.length; i < numbers.length - 1; i++) {
  for (let j = 0; j < size - 1 - i; j++) {
    if (numbers[j] > numbers[j+1]) {
      const tmp = numbers[j];
      numbers[j] = numbers[j+1];
      numbers[j+1] = tmp;
    }
  }
}
