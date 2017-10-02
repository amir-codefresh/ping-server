const express = require('express');
const {getResponseText} = require('./logic');

const PORT = 3000;

const app = express();

app.get('/:param', (req, res) => {
	res.send(getResponseText(req.params.param));
});

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});