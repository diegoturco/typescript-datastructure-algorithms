const binarySearchBasic = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;
  let middlePosition = left + right / 2;
  middlePosition = Math.round(middlePosition);

  while (array.length > middlePosition) {
    const middleElement = array[middlePosition];

    if (middleElement === target) return middlePosition;

    if (target < middleElement) {
      right = middlePosition - 1;
    }

    if (target > middleElement) {
      left = middlePosition + 1;
    }

    if (left > right) return -1;

    middlePosition = left + right / 2;
  }

  return -1;
};

export default binarySearchBasic;
