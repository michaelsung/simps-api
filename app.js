const express = require('express');

const app = express();
const axios = require('axios');

app.get('/api/random', (req, res) => {
  axios.get('https://www.reddit.com/r/SimpsonsFaces/random.json')
    .then((response) => {
      // take the reddit post out of the response
      const object = response.data[0].data.children[0].data;
      const { url, title } = object;

      const returnJSON = {
        caption: title,
        url,
      };

      res.send(returnJSON);
    });
});

app.listen(3000, () => {
  console.log('Ready to SIMPS!!!!');
});
