const {getResponseText} = require('./logic');

describe('getResponseText', function() {
	test('returns the given value', function() {
		expect(getResponseText('codefresh')).toBe('codefresh');
	});

	test('returns the pong for ping', function() {
		expect(getResponseText('ping')).toBe('pong');
	});

});