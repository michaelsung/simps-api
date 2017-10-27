const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api/random', function (req, res) {
  axios.get('https://www.reddit.com/r/SimpsonsFaces/random.json')
    .then((response) => {
      const object = response.data[0].data.children[0].data; // take the reddit post out of the response
      const url = object.url;
      const title = object.title;

      const returnJSON = {
        "caption": title,
        "url": url,
      }
      
      res.send(returnJSON);
    });
});

app.listen(3000, () => {
  console.log('Ready to SIMPS!!!!');
});
