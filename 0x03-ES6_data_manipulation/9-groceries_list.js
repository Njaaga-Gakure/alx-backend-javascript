export default function groceriesList() {
  const list = [
    { key: 'Apples', value: 10 },
    { key: 'Tomatoes', value: 10 },
    { key: 'Pasta', value: 1 },
    { key: 'Rice', value: 1 },
    { key: 'Banana', value: 5 },
  ];
  const groceriesMap = new Map();
  list.forEach(({ key, value }) => groceriesMap.set(key, value));
  return groceriesMap;
}
