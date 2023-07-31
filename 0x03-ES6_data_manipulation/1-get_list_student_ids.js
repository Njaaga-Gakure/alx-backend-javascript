export default function getListStudentIds(objArr) {
  return !Array.isArray(objArr)
    ? []
    : objArr.map(({ id }) => id);
}
