const express = require('express')

const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello WorldxЁ!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
