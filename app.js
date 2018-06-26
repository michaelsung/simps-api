const express = require('express');
const cors = require('cors');

const app = express();
const axios = require('axios');

app.use(cors());

app.get('/api/random', (req, res) => {
	axios.get('https://www.reddit.com/r/SimpsonsFaces/random.json')
		.then((response) => {
			// take the reddit post out of the response
			const object = response.data[0].data.children[0].data;
			// console.log(object.preview.images[0].source.url);
			const url = object.preview.images[0].source.url;
			const { title } = object;

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
