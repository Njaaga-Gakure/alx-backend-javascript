/* eslint-disable no-param-reassign */
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, { id }) => {
    sum += id;
    return sum;
  }, 0);
}
