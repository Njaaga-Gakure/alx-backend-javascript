export default function cleanSet(set, startString) {
  if (startString) {
    return [...set]
      .filter((item) => {
        if (item) {
          return item.startsWith(startString);
        }
        return '';
      })
      .map((item) => {
        if (item) {
          return item.replace(startString, '');
        }
        return '';
      })
      .join('-');
  }
  return '';
}
