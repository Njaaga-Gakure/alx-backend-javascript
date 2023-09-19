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
        console.log(`Number of students: ${data.length}`);
        const { CS, SWE } = data.reduce((stats, current) => {
          const dataArr = current.split(',');
          const name = dataArr[0];
          const field = dataArr[dataArr.length - 1];
          stats[field].push(name);
          return stats;
        }, { CS: [], SWE: [] });
        console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
        console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
        resolve();
      }
    });
  })
);
module.exports = countStudents;
