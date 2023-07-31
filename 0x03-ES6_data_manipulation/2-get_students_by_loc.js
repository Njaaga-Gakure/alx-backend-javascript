export default function getStudentsByLocation(studentArr, city) {
  return studentArr.filter(({ location }) => location === city);
}
