export default function iterateThroughObject(reportWithIterator) {
  const employeeStr = [];
  for (const [index, item] of reportWithIterator.entries()) {
    employeeStr.push(item);
    if (index !== reportWithIterator.length - 1) {
      employeeStr.push('|');
    }
  }
  return employeeStr.join(' ');
}
