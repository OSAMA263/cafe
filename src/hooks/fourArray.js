export const fourArr = (arr) => {
  let four = [];
  for (let i = 0; i < arr.length; i += 4) {
    four.push(arr.slice(i, i + 4));
  }
  return (four);
};
