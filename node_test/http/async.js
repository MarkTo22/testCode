var c = 0;

function printIt() {
	console.log(c)
}

function plus(cb) {
	setTimeout(function(){
		c += 1
		cb()
	},1000)
}
plus(printIt)