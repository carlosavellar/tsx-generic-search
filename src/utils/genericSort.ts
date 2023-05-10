export const genericSort = <T>(a: T, b: T, key: keyof T) => {
  if (a[key] > b[key]) {
    return 1;
  } else if (a[key] < b[key]) {
    return -1;
  } else {
    return 0;
  }
};
