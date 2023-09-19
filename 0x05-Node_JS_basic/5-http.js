const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const port = '1245';

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((result) => {
      res.end(result);
    }).catch((err) => {
      res.statusCode = 404;
      res.end(err.message);
    });
  }
});

app.listen(port);
module.exports = app;
