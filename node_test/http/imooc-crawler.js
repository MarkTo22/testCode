var https = require('https')
var url = 'https://www.imooc.com/learn/348'

https.get(url, function(res) {
	var html = ''
	res.on('data', function(data) {
		html += data
	})

	res.on('end', function() {
		console.log(html)
	})
}).on('error', function(){
	console.error('get error!')
})