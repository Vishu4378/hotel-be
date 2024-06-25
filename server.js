const express = require('express');
const app = express();
const _ = require('lodash');
const { db } = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoutes = require('./routes/personRouter');
app.use(personRoutes);

const menuRoutes = require('./routes/menuRouter');
app.use(menuRoutes);

app.listen(3005, (req, res) => {
  console.log('app listening on port 3005');
});

// fun(109, 2, (a, b) => {
//   console.log(a + b);
// });

// const user = os.userInfo();
// fs.appendFile('hi.txt', user.username + '\n', () => {
//   console.log('file');
// });

// const uniq = _.uniq(['hi', 'hello', 'bye', 'bye']);
// console.log('os', user);
// console.log('uniq', uniq);
