const fs = require('fs');
const nouns = fs
	.readFileSync(__dirname + '/../assets/words/nouns.txt', 'utf8')
	.split('\n');

const { randomArrKey, txtToArr } = require('./lib/helper');

const vocabulary = txtToArr(
	fs.readFileSync('./assets/words/tweets.txt', 'utf8')
);

const makePost = async product => {
	const name = [...product.name, product.zero ? 'fanta zero' : 'fanta']
		.join(' ')
		.split(' ')
		.map(word =>
			word
				.split('')
				.map((letter, i) =>
					i === 0 ? letter.toUpperCase() : letter.toLowerCase()
				)
				.join('')
		)
		.join(' ');

	const noun = randomArrKey(nouns);
	const tweet = `Get ready for ${noun}`;
	return {
		noun,
		product,
		name,
		tweet,
	};
};

module.exports = makePost;
