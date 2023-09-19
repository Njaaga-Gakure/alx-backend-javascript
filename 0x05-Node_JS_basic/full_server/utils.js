import { readFile } from 'fs';

const readDatabase = (path) => (
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, result) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let data = result.toString().split('\n').slice(1);
        data = data.filter((item) => item !== '');
        const obj = data.reduce((stats, current) => {
          const dataArr = current.split(',');
          const name = dataArr[0];
          const field = dataArr[dataArr.length - 1];
          stats[field].push(name);
          return stats;
        }, { CS: [], SWE: [] });
        resolve(obj);
      }
    });
  })
);

export default readDatabase;
