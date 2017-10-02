function getResponseText(val) {
	switch(val) {
		case 'ping':
			return 'pong';
		case 'hello':
			return 'world';
		default:
			return val;
	}
}

module.exports = {
	getResponseText
};