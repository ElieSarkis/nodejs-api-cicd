const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This API endpoint is tested with each code push to GitHub.');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
