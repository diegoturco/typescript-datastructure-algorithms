const numbers = [4, 9, 3, 6, 2];
for (let i = 0; i < numbers.length; i++) {
  let minIdx = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIdx]) {
      minIdx = j;
    }
  }
  const tmp = numbers[minIdx];
  numbers[minIdx] = numbers[i];
  numbers[i] = tmp;
}