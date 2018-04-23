export const Ascending = (data) => {
  const n = data.length;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    temp = data[i];
    let j = i - 1;
    while (data[j] > temp && j >= 0) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = temp;
  }
  return data;
};

export const Descending = (data) => {
  const n = data.length;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    temp = data[i];
    let j = i - 1;
    while (data[j] < temp && j >= 0) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = temp;
  }
  return data;
};
