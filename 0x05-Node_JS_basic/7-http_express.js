const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((result) => {
    res.status(200).send(`This is the list of our students\n${result}`);
  }).catch(({ message }) => {
    res.status(404).send(`This is the list of our students\n${message}`);
  });
});
app.listen(1245);
module.exports = app;
