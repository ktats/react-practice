const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/', (req, res) => {
    res.send('hello');
  });


app.listen(PORT, () => {
    console.log(`Server listening on port ${[PORT]}`)
})