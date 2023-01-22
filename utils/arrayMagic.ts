const randomIndex = (array: any[]): number => Math.floor(Math.random() * array.length);

export const pickOne = (array: any[]) => array[randomIndex(array)];

export const getN = (array: any[], n: number, exclude: any[] = []) => {
  const subset: any[] = [];

  while (subset.length < n) {
    const e = pickOne(array);
    if (!subset.includes(e) && !exclude.includes(e)) {
      subset.push(e);
    }
  }

  return subset;
};

export const shuffle = (array: any[]): any[] => {
  const input = [...array];
  const output: any[] = [];
  while (input.length) {
    output.push(input.splice(randomIndex(input), 1)[0])
  }
  return output;
};