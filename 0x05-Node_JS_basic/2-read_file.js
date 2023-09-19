/* eslint-disable no-param-reassign */
const { readFileSync } = require('fs');

const countStudents = (path) => {
  try {
    let data = readFileSync(path, 'utf-8').toString().split('\n');
    data = data.slice(1).filter((item) => item !== '');
    const { total, CS, SWE } = data.reduce((stats, current) => {
      const dataArr = current.split(',');
      const field = dataArr[dataArr.length - 1];
      const name = dataArr[0];
      stats.total += 1;
      stats[field].push(name);
      return stats;
    }, { total: 0, CS: [], SWE: [] });
    console.log(`Number of students: ${total}`);
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
