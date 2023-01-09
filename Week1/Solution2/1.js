const sortArray = (numbers) => {
  return quickSort(numbers, 0, numbers.length - 1);
};

const quickSort = (numbers, left, right) => {
  if (right > 0) {
    const index = partition(numbers, left, right);
    if (left < index - 1) quickSort(numbers, left, index - 1);
    if (index < right) quickSort(numbers, index, right);
  }
  return numbers;
}

const partition = (items, left, right) => {
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) ++i;
    while (items[j] > pivot) --j;
    if (i <= j) {
        const swap = items[i];
        items[i++] = items[j];
        items[j--] = swap;
    }
  }
  return i;
}