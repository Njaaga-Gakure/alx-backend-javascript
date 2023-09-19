import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2]).then((result) => {
      let message = 'This is the list of our students\n';
      for (const [key, value] of Object.entries(result)) {
        message += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }
      res.status(200).send(message.trim());
    }).catch(({ message }) => {
      res.status(500).send(message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase(process.argv[2]).then((result) => {
      if (!Object.prototype.hasOwnProperty.call(result, major)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${result[major].join(', ')}`);
      }
    }).catch(({ message }) => {
      res.status(500).send(message);
    });
  }
}
export default StudentsController;
