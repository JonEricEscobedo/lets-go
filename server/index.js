const express = require('express');
const app = express();
const PORT = 5150;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})