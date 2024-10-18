const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This API endpoint is tested with each code push to GitHub.');
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Exporting both the app and server for testing purpose
module.exports = { app, server };
