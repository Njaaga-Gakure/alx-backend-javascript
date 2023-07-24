/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const item of array) {
    const value = item;
    array[i] = appendString + value;
    i += 1;
  }
  return array;
}
