/* eslint-disable no-param-reassign */
const { readFile } = require('fs');

const countStudents = (path) => (
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, result) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let data = result.toString().split('\n').slice(1);
        data = data.filter((item) => item !== '');
        const totalStr = `Number of students: ${data.length}`;
        console.log(totalStr);
        const { CS, SWE } = data.reduce((stats, current) => {
          const dataArr = current.split(',');
          const name = dataArr[0];
          const field = dataArr[dataArr.length - 1];
          stats[field].push(name);
          return stats;
        }, { CS: [], SWE: [] });
        const csStr = `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`;
        const sweStr = `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
        console.log(csStr);
        console.log(sweStr);
        resolve(`${totalStr}\n${csStr}\n${sweStr}`);
      }
    });
  })
);
module.exports = countStudents;
