export default function createIteratorObject(report) {
  let employeeArray = [];
  for (const item of Object.keys(report.allEmployees)) {
    employeeArray = [...employeeArray, ...report.allEmployees[item]];
  }
  return employeeArray;
}
