export const AscendingSort = (arr) => {
  const n = arr.length;
  for (i = 0; i < n; i++) {
    min = arr[i];
    pos = i;
    for (j = i; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        pos = j;
      }
    }
    if (i !== pos) {
      temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
    }
  }
  return arr;
};

export const DescendingSort = (arr) => {
  const n = arr.length;
  for (i = 0; i < n; i++) {
    min = arr[i];
    pos = i;
    for (j = i; j < n; j++) {
      if (arr[j] > min) {
        min = arr[j];
        pos = j;
      }
    }
    if (i !== pos) {
      temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
    }
  }
  return arr;
};
