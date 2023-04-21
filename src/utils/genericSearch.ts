export const genericSearch = <T>(
  data: T,
  properties: Array<keyof T>,
  query: string,
  isSpecialCard: boolean
): boolean => {
  if (query === '') return true;

  return properties.some((property) => {
    const value = data[property];
    if (typeof value === 'string' || typeof value === 'number') {
      if (isSpecialCard) {
        return value.toString().toLocaleLowerCase().includes(query.toLowerCase());
      } else {
        return value.toString().includes(query);
      }
    }
    return false;
  });
};

const name1 = 'jose';
const name2 = 'carlos';
const name3 = 'santos';

if (typeof name1 === 'string' || typeof name2 === 'string') {
  console.log('Both ' + name1 + ' and ' + name2 + ' are strings');
}
