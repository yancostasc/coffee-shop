const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/coffee', (req, res) => {
  axios.get('https://coffee.alexflipnote.dev/random.json')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch coffee data' });
    });
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
