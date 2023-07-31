export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter(({ location }) => location === city)
    .map((student) => {
      const studentGrades = newGrades.find(({ studentId }) => studentId === student.id);
      return studentGrades && studentGrades.grade
        ? { ...student, grade: studentGrades.grade }
        : { ...student, grade: 'N/A' };
    });
}
