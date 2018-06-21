function learn(p) {
	console.log(p)
}

function we(callback, something) {
	something += ' is cool'
	callback(something)
}

we(learn, 'nodejs')