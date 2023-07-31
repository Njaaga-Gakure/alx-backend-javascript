export default function cleanSet(set, startString) {
  if (startString) {
    return [...set]
      .filter((item) => item.startsWith(startString))
      .map((item) => item.replace(startString, ''))
      .join('-');
  }
  return '';
}
