export const getObjectValues = (obj: { [key: string]: any }): any[] => {
  return Object.keys(obj).map(k => obj[k]);
}
