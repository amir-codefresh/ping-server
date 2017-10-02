const express = require('express');

const PORT = 3000;

const app = express();

app.get('/ping', (req, res) => {
	res.send('pong');
});

app.get('/hello', (req, res) => {
	res.send('world');
});

app.get('/:param', (req, res) => {
	res.send(req.params.param);
});

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});