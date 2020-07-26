const numbers = [6, 4, 5, 3, 2, 1];

for (let i = 1; i < numbers.length; i++) {
  const key = numbers[i];
  let j = i - 1;
  while (j >= 0 && key < numbers[j]) {
    numbers[j+1] = numbers[j];
    j = j - 1;
  }
  numbers[j+1] = key;
}