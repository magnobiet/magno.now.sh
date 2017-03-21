'use strict';

module.exports = (request, response) => {

	response.writeHead(302, {
		Location: 'https://magnobiet.com/'
	});

	response.end();

};
