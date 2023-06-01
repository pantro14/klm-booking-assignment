import express from 'express'
const app = express();
import * as fs from "fs";

app.get('/booking', (req, res) => {
  const dataPath = './server/data/mock.json';
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) throw err;
    res.send({
      booking: JSON.parse(data)
    });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
});
